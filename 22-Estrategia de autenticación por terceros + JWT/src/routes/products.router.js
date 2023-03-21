import { Router } from 'express';
import ProductsManager from '../persistencia/daos/mongoManager/ProductsManager.js';
import { userPermision } from '../persistencia/middlewares/userRol.js';
// sessions
import session from 'express-session';

const router = Router();

const productManager = new ProductsManager(); // instancio

router.get('/todos', async (req, res) => { // → si dejo solo el "/" No levanta la pag.
    const { limit = 10, page = 1 } = req.query; // x ej:  http://localhost:8080/products?limit=2&page=1
    const products = await productManager.getAllProducts(limit, page);
    // console.log('products', products);
    if (products.length === 0) {
        res.send('No hay productos listados');
    } else {
        res.render('products', { products, limit, page })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const singleProduct = await productManager.getProductById(id);

    if (singleProduct) {
        res.render('products', { singleProduct });
        // console.log(singleProduct);
    } else {
        res.send(`Lamentablemente el Id ${id} no se encuentra listado.`);
    }
})

router.post('/agregar', userPermision, async (req, res) => {
    console.log(userPermision);
    
    const prod = req.body;
    try {
        const newProduct = await productManager.addProduct(prod);
        // res.render('agregarProducto')
        res.redirect('/products/todos'); //luego de que lo cargo redirecciono a productos
    } catch (error) {
        res.redirect('error');
    }
})

router.delete('/:id' , async (req, res)=>{
    const {id} = req.params;
    const delProd = await productManager.deleteProduct(id);
    res.json({message : delProd });
})

export default router