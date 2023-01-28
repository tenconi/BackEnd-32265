import { Router } from "express";
const router = Router();

import KT from "../src/cartManager.js";
const cartMan = new KT();


router.get('/', (req, res)=>{
    let cart =  cartMan.getPurchases();
    // res.json({message:' Carrito de compras', read})
    res.json(cart)
})

router.post('/:pid', (req, res)=>{
    let {pid} = req.params;
    cartMan.addToCart(parseInt(pid))
})

router.get('/:pid', (req, res)=>{

    res.json({message:' Carrito de compras'})
})

export default router;