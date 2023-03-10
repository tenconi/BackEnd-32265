import { Router } from "express";
import CartManager from "../persistencia/daos/cartManager.js"; // bbdd

const router = Router();
const cartManager = new CartManager();


router.post('/' , async (req, res) => {
    const createNewCart = await cartManager.createCart();
    res.status(200).json({ message : 'Carrito creado exitosamente.', createNewCart })
})

router.get('/:cid' , async (req , res) => {
    const { cid } = req.params;
    const getCart = await cartManager.getCartById( cid ); 
    res.status(200).json({ message : `Carrito id n° ${cid} seleccionado.` , getCart})
})


router.post('/:cid/products/:pid' , async (req, res) => {
    const { cid , pid } = req.params;
    const { quantity } = req.body;

    const purch = await cartManager.addProductsToCart( cid , pid , parseInt(quantity));
    // res.status(200).json({ message : 'Has agregado un producto correctamente.' , cart: purch });
    res.status(200).json({ purch });
})

/* router.get('/', async (req, res) => {
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

 */

export default router