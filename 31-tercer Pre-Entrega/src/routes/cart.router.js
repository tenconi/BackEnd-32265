import { Router } from 'express';
// import CartManager from '../dao/mongoManagers/CartManager.js';
import CartMongoManager from '../persistence/DAOs/cartsDAOs/cartMongo.js';
import { isAuthorized } from '../middlewares/authorized.middleware.js';
import { isAuthenticated } from '../middlewares/authenticated.middleware.js';

// const cartManager = new CartMongoManager(); // *** debiera levantar resultado de factory

const router = Router();

import cartControllers from '../controllers/cart.controllers.js';

router.post('/', cartControllers.newCart);

router.get('/', cartControllers.getAll);

router.get('/:cid', isAuthenticated, cartControllers.getCart);

router.get(':pid/cart', isAuthenticated, cartControllers.toCart);
// router.get(':pid/products/:cid', isAuthenticated, cartControllers.toCart);
// router.get('/products/:pid/add-to-cart/:cid', isAuthenticated, cartControllers.toCart);

export default router;
