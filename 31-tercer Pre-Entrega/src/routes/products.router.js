import { Router } from 'express';
// import ProductsManager from '../dao/mongoManagers/productsManager.js';
// import ProductsMongoManager from '../persistence/DAOs/productsDAOs/productsMongo.js'
import ProductsControlls from '../controllers/products.controllers.js';

const router = Router();

// const productManager = new ProductsMongoManager(); // *** debiera levantar resultado de factory

router.get('/all', ProductsControlls.getAllProducts)
router.get('/:id', ProductsControlls.productById)
router.post('/add', ProductsControlls.addNewProduct)


// router.post('/add', /* userPermision, */ async (req, res) => {
//     // console.log(userPermision);
//     const prod = req.body;
//     try {
//         const newProduct = await productManager.addProduct(prod);
//         // res.render('agregarProducto')
//         res.redirect('/products/all'); //luego de que lo cargo redirecciono a productos
//     } catch (error) {
//         res.redirect('error');
//     }
// })

router.delete('/:id' , async (req, res)=>{
    const {id} = req.params;
    const delProd = await productManager.deleteProduct(id);
    res.json({message : delProd });
})

export default router;
