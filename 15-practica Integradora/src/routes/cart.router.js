import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({message : 'Cart Router'})
})

router.post('/', (req, res) => {
})

export default router