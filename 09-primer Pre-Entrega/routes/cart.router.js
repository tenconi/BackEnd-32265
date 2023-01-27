import { Router } from "express";
const router = Router();

router.get('/', (req, res)=>{

    res.json({message:' Carrito de compras'})
})
router.get('/:pid', (req, res)=>{

    res.json({message:' Carrito de compras'})
})

export default router;