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

router.get( '/login' , (req, res) => {
    res.render('login')
})

router.get( '/register' , (req, res) => {
    res.render('register')
})

router.get( '/perfil' , (req, res) => {
    res.render('perfil')
})

/* vistas  users */

router.get('/session' , (req, res)=>{
    res.render('login');
})

router.get('/session/registro' , (req, res)=>{
    res.render('registro');
})

router.get('/session/errorRegistro' , (req, res)=>{
    res.render('errorRegistro');
})

router.get('/session/errorLogin' , (req, res)=>{
    res.render('errorLogin');
})

router.get('/session/perfil' , (req, res)=>{
    res.render('perfil');
})

export default router