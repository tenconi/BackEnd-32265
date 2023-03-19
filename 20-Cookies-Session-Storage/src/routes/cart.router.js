import { Router } from 'express';
import CartManager from '../persistencia/daos/mongoManager/CartManager.js';
// middleware de credenciales: status / user
import { userPermision } from '../persistencia/middlewares/userRol.js';

const router = Router();

const cartManager = new CartManager();

router.post( '/' , async (req, res) => {
    const createNewCart = await cartManager.createCart();
    // res.status(200).json({ message : 'Carrito creado exitosamente.', createNewCart })
    // res.status(200).render('cart', {createNewCart})
})

router.get( '/todos' , userPermision, async (req, res) => { // * * * middleware de status
    const allCarts = await cartManager.getAllCarts({});
    // console.log(allCarts)
    res.render('cart', {allCarts})
})

router.get('/:cid' , async (req , res) => {
    const { cid } = req.params;
    const getCart = await cartManager.getCartById( cid ); 
    // res.status(200).json({ message : `Carrito id n° ${cid} seleccionado.` , getCart})
    console.log(getCart);
    res.status(200).render('cart' , {getCart})
})


export default router