import { Router } from 'express';

const router = Router();

router.get( '/' , (req, res) => {
    res.json({message: ' chat'})
})

export default router