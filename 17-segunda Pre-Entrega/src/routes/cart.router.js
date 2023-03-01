import { Router } from "express";
import CartManager from "../persistencia/daos/cartManager.js"; // bbdd

const router = Router();
const cartManager = new CartManager();

router.get('/', async (req, res) => {
    const cart = await cartManager.getPurchases();
    if(!cart.length){
        res.json({message : 'No se han seleccionado productos: ', cart: cart})

    }else{
        res.json({message : 'Productos en carro: ', cart: cart})

    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const cart = await cartManager.getPurchaseById( id ); 
    res.json({message : `Resultado de su consulta con id ${id}: `, result : cart})
})

router.post('/:id', async (req, res) => {
    const {id} = req.params;
    const purchase = await cartManager.addToCart( id ); 
    res.json({message : 'Producto agregado correctamente.' , purchase })
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const delPurchase = await cartManager.deletePurchase( id ); 
    res.json({message : delPurchase })
})



export default router