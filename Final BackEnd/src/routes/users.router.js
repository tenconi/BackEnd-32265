// ROUTES : consume "controlls"
import { Router } from 'express';
import UsersController from './../controllers/users.controller.js';

const router = Router();

router.post('/', () => {
  UsersController.createOne;
});

router.get('/:idUser', () => {
  UsersController;
});

export default router;
