// ROUTES : consume "controlls"
import { Router } from 'express';
import ProductsControllers from '../controllers/products.controller.js';

class ProductsRouter {
  constructor() {
    this.router = Router();
    this.router.get('/', ProductsControllers.allProducts);
    this.router.post('/add', ProductsControllers.addProduct);
  }

  // creo metodo INIT(){} para "prender"/ activar el router
  initRouter() {
    return this.router;
  }
}

export default new ProductsRouter();
