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
    let cart = cartMan.addToCart(parseInt(pid))
    res.json(cart)
})

router.get('/:pid', (req, res)=>{
    let {pid} = req.params;
    let purch = cartMan.getPurchaseById(parseInt(pid));
    res.json(purch)
})

router.delete(('/:pid'), (req, res)=>{
    let {pid} = req.params;
    let del = cartMan.deletePurchase(parseInt(pid))
    res.json(del)
})

export default router;