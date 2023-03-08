import { Router } from "express";
import ProductManager from "../persistencia/daos/productsManager.js"; // BBDD

const router = Router();

const productManager = new ProductManager()

// ↓ le agrego "mongoosePagination" ↓
router.get('/', async (req, res) => {

    const {limit=20 , page=1} = req.query; // por defecto muestro 20 productos de la primer pagina.        
    // * ej:  http://localhost:3000/products?limit=2&page=1
    const products = await productManager.getAllProducts( limit , page );
    console.log(limit , page);
    
    if (products.length === 0) {
        res.json({message : 'No hay productos listados'});        
    } else { 
        const next = products.hasNextPage ? `http://localhost:3000/products?limit=${products.limit}&page=${products.nextPage}` : 'null';
        const prev = products.hasPrevPage ? `http://localhost:3000/products?limit=${products.limit}&page=${products.prevPage}` : 'null';
        res.json({message : 'Listado de productos: ', products: products.docs , PrevPág: prev , PróxPág: next , Página : `${products.page} / ${products.totalPages}`});        
    }
})

router.get('/:id', async (req , res) => {
    const {id} = req.params;
    const product = await productManager.getProductById(id); 


    if (product) {
        res.json({message : 'Resultado de su seleccion: ', product: product});
    } else {
        res.json({message : `Lamentablemente el Id ${id} no se encuentra listado.`});
    }
})

router.post('/', async (req, res) => {
    const prod = req.body;
    const newProduct = await productManager.addProduct(prod);
    res.json({message : 'Products agregado correctamente', prod});
})

router.put('/:id', async  (req, res) => {
    const {id} = req.params;
    const newValue = req.body; 
    const field = Object.keys(newValue).toString(); // lo paso a string xq me llega como array
    const value = Object.values(newValue).toString(); // lo paso a string xq me llega como array

    const editProd = await productManager.updateProduct( id , field , value ); 
    res.json({message: editProd}) ;
})

router.delete('/:id', async (req , res) => {
    const {id} = req.params;
    const delProd = await productManager.deleteProduct(id);
    res.json({message : delProd });
})

router.delete('/', async (req , res) => {
    const delFile = await productManager.deleteFile();
    res.json({message : delFile });
})

export default router