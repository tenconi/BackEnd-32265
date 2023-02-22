import { Router } from "express";
import { __dirname } from "../utils.js";

const realtimeproducts = Router();

realtimeproducts.get('/' , ( req , res ) => {
  res.render( 'realtimeproducts' );
} )



export default realtimeproducts;