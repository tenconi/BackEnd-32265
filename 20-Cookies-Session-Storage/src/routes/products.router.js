import { Router } from 'express';
import ProductsManager from '../persistencia/daos/mongoManager/ProductsManager.js';

const router = Router();

const productManger = new ProductsManager(); // instancio

router.get('/todos', async (req, res) => {
    const { limit = 10, page = 1 } = req.query; // x ej:  http://localhost:8080/products?limit=2&page=1
    const products = await productManger.getAllProducts(limit, page);
    // console.log('products', products);
    if (products.length === 0) {
        res.send({ message: 'No hay productos listados' });
    } else {
        res.render('products' , {products , limit , page })
    }
})

export default router