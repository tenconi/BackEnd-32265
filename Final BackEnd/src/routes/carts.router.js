// ROUTES : consume "controlls"
import { Router } from 'express';

class CrtsRouter {
  constructor() {
    this.router = Router();
  }

  // creo metodo INIT(){} para "prender"/ activar el router
  initRouter() {
    return this.router;
  }
}

export default new CrtsRouter();
