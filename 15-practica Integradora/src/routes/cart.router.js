import { Router } from "express";
import CartManager from "../dao/filesManager/cartManager.js";

const router = Router();
const cartManager = new CartManager();

router.get('/', async (req, res) => {
    const cart = await cartManager.getPurchases();
    res.json({message : 'Productos en carro: ', cart: cart})
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const cart = await cartManager.getPurchaseById( parseInt(id) );
    res.json({message : `Resultado de su consulta con id ${id}: `, result : cart})
})

router.post('/:id', async (req, res) => {
    const {id} = req.params;
    const purchase = await cartManager.addToCart( parseInt(id) );
    res.json({message : 'Producto agregado correctamente.' ,product:purchase })
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const delPurchase = await cartManager.deletePurchase( parseInt(id) );
    res.json({message : delPurchase })
})



export default router