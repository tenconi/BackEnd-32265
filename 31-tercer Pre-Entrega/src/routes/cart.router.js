import { Router } from 'express';
// import CartManager from '../dao/mongoManagers/CartManager.js';
import CartMongoManager from '../persistence/DAOs/cartsDAOs/cartMongo.js'
import { isAuthorized } from '../middlewares/authorizedRol.middleware.js';
import { isAuthenticated } from '../middlewares/authenticated.middleware.js';

// import {createNewCart,
//   getListCarts,
//   getCartId,productsToCart} from './../controllers/cart.controllers.js'

const router = Router();
// const cartManager = new CartMongoManager(); // *** debiera levantar resultado de factory

import cartControllers from '../controllers/cart.controllers.js';

router.post('/',cartControllers.newCart)
// router.post('/', async (req, res) => {
//   const createNewCart = await cartManager.createNewCart();
//   // res.status(200).json({ message : 'Carrito creado exitosamente.', createNewCart })
//   // res.status(200).render('cart', {createNewCart})
//   res.redirect('/cart/all');
// });

router.get('/',cartControllers.getAll)
// router.get(
//   '/all', isAuthorized, async (req, res) => { // middleware de rol    
//     // const allCarts = await cartManager.getListCarts({});
//     const allCarts = await cartManager.getListCarts();
//     // console.log(cookie)
//     res.render('cart', { allCarts });
//   }
// );

router.get('/:cid', isAuthenticated, cartControllers.getCart); // middleware de autenticación
// router.get('/:cid', async (req, res) => {
//   const { cid } = req.params;
//   const getCart = await cartManager.getCartId(id);
//   // res.status(200).json({ message : `Carrito id n° ${cid} seleccionado.` , getCart})
//   // console.log(getCart.length)
//   const notif = 'No se han seleccionado productos';
//   if (getCart.length === 0) {
//     res.status(200).render('cart', { notif });
//   } else {
//     res.status(200).render('cart', { getCart });
//   }
// });

router.post('/:pid', cartControllers.toCart)
// router.post('/:pid/products/:cid', cartControllers.toCart)

// router.post('/:cid/products/:pid', async (req, res) => {
//   const { cid, pid } = req.params;
//   const { quantity } = req.body;

//   const purch = await cartManager.addProductsToCart(
//     cid,
//     pid,
//     parseInt(quantity)
//   );
//   res
//     .status(200)
//     .json({
//       message: `Has agregado ${quantity} ${
//         quantity > 1 ? 'productos' : 'producto'
//       } correctamente.`,
//       cart: purch,
//     });
// });

export default router;
