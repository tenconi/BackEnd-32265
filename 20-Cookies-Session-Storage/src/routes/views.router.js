import { Router } from 'express';

const router = Router();

router.get( '/' , (req, res) => {
    res.render('home')
})

router.get( '/products' , (req, res) => {
    res.render('products')
})

router.get( '/products/agregar' , (req, res) => {
    res.render('agregarProducto')
})

router.get( '/cart' , (req, res) => {
    res.render('cart')
})

router.get( '/chat' , (req, res) => {
    res.render('chat')
})


/* vistas  users */

router.get('/users/login' , (req, res)=>{
    res.render('login');
})

router.get('/users/registro' , (req, res)=>{
    res.render('registro');
})

router.get('/users/errorRegistro' , (req, res)=>{
    res.render('errorRegistro');
})

router.get('/users/errorLogin' , (req, res)=>{
    res.render('errorLogin');
})

router.get('/users/perfil' , (req, res)=>{
    res.render('perfil', {req});
})


router.get('/users/notAuthorized' , (req, res)=>{
    res.render('rolDenied');
})

export default router