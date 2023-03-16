import { Router } from 'express';
import ProductsManager from '../persistencia/daos/mongoManager/ProductsManager.js';

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
    const singleProduct = await productManager.getProductById( id );
    
    if (singleProduct) {
        res.render('products', {singleProduct} );
        // console.log(singleProduct);
    } else {
        res.send(`Lamentablemente el Id ${id} no se encuentra listado.`);
    }
})

export default router