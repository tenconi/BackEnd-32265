import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';
import usersController from '../controllers/users.controller.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = Router();

router.get('/', viewsController.home);

router.get('/user/login', viewsController.user_log);
router.get('/user/register', viewsController.user_reg);
router.get('/user/profile', isAuthenticated, viewsController.user_prof);

// router.get('/products', viewsController.prods_all);
router.get('/products/add', viewsController.prods_add); // solo render

// errores
router.get('/error', viewsController.error);
router.get('/error-authorization', viewsController.err_aut);
router.get('/error-login', viewsController.err_log);
router.get('/error-oops', viewsController.err_ups);

export default router;

/* 
router.get('/users', (req, res) => {
  res.send('User<br><nav> <a href="/">inicio</a> | <a href="/user">user</a> | <a href="/user/registro">registro</a> | <a href="/user/login">login</a> | <a href="/cart">cart</a> | <a href="/products">product</a> | <a href="/products/add">agregar nuevo</a> </nav>');
  // res.json({ mesagge: 'Users' });
  // res.render('users');
});


*/
