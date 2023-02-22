import { Router } from "express";
// import CartManager from "../dao/filesManager/cartManager.js"; // files
import CartManager from "../dao/mongoManager/cartManager.js"; // bbdd

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
    // const cart = await cartManager.getPurchaseById( parseInt(id) ); // para usar con files
    const cart = await cartManager.getPurchaseById( id ); // para usar con ddbb
    res.json({message : `Resultado de su consulta con id ${id}: `, result : cart})
})

router.post('/:id', async (req, res) => {
    const {id} = req.params;
    // const purchase = await cartManager.addToCart( parseInt(id) ); // para usar con files
    const purchase = await cartManager.addToCart( id ); // para usar con ddbb
    res.json({message : 'Producto agregado correctamente.' , purchase })
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    // const delPurchase = await cartManager.deletePurchase( parseInt(id) ); // para usar con files
    const delPurchase = await cartManager.deletePurchase( id ); // para usar con ddbb
    res.json({message : delPurchase })
})



export default router