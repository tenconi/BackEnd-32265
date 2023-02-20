import { Router } from "express";
// import ProductManager from '../dao/filesManager/productsManager.js'; // file
import ProductManager from "../dao/mongoManager/productsManager.js"; // BBDD

const router = Router();

const productManager = new ProductManager()

router.get('/', async (req, res) => {
    const products = await productManager.getAllProducts();
    if (products.length === 0) {
        res.json({message : 'No hay productos listados'});        
    } else {
        res.json({message : 'Listado de productos: ', products: products});        
    }
})

router.get('/:id', async (req , res) => {
    const {id} = req.params;
    // const product = await productManager.getProductById(parseInt(id)); // usar con Files
    const product = await productManager.getProductById(id); // usar con bbdd


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

    // const editProd = await productManager.updateProduct( parseInt(id) , field , value ); // usar con Files
    const editProd = await productManager.updateProduct( id , field , value ); // usar con bbdd
    res.json({message: editProd}) ;
})

router.delete('/:id', async (req , res) => {
    const {id} = req.params;
    // const delProd = await productManager.deleteProduct(parseInt(id));
    const delProd = await productManager.deleteProduct(id);
    res.json({message : delProd });
})

router.delete('/', async (req , res) => {
    const delFile = await productManager.deleteFile();
    res.json({message : delFile });
})

export default router