import { Router } from "express";
// import { socketServer } from "../server.js";

const router = Router();


router.get('/', (req, res)=>{

    res.render('home');

})

/* router.get('/realtimeproducts', (req, res)=>{

    res.render('realtimeproducts');

}) */

export default router;