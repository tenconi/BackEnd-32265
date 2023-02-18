import { Router } from "express";
import CartManager from "../dao/filesManager/cartManager.js";

const router = Router();
const cartManager = new CartManager();

router.get('/', async (req, res) => {
    const cart = await cartManager.getPurchases();
    res.json({message : 'Cart Router', cart})
})

router.post('/:id', async (req, res) => {
    const {id} = req.params;
    const purchase = await cartManager.addToCart(parseInt(id));
    res.json({message : 'Cart Router', purchase })
})

export default router