// ROUTES : consume "controlls"
import { Router } from 'express';
import UsersController from './../controllers/users.controller.js';

// const router = Router();

// router.post('/', () => {
//   UsersController.createOne;
// });

// router.get('/', (req, res) => {
//   console.log(`Ruta GET : findAllUsers`);
  
//   UsersController.allTheUsers;
//   // res.json({ message: 'Todos los usuarios' , constante })
// });

// router.get('/:idUser', () => {
//     console.log(`Ruta GET : findUser`);
//   UsersController.findOne;
// });

// export default router;

class UsersRouter{
  constructor(){
    this.router = Router()
    this.router.post('/', UsersController.createOne)
    this.router.get('/', UsersController.allTheUsers)
    this.router.get('/:id', UsersController.findOne)
  }

  // creo metodo INIT(){} para "prender"/ activar el router
  getRouter() {
    return this.router;
  }
}

export default new UsersRouter();
