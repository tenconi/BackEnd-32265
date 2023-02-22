import { Router } from "express";
import PM from "../prodManager.js";
import { __dirname } from "../utils.js";

const realtimeproducts = Router();

realtimeproducts.get('/' , ( req , res ) => {
  res.render( 'realtimeproducts' );
} )


/* 
// ANTERIOR: 
const prodMan = new PM(__dirname+'/files/Productos.json');

realtimeproducts.get("/", (req, res) => {
  const { limit } = req.query;
  let file = prodMan.getFile();

  if (limit && !isNaN(limit)) {
    file = file.slice(0, limit);
  }
  
  res.render("realtimeproducts", {file}); // renderizo
});

realtimeproducts.post("/", (req, res) => {
    const file = req.body;
  prodMan.addProduct(prod);
  res.json({ message: `→ Producto creado exitosamente:`, file });

  res.render("realtimeproducts", {file});
  // res.redirect("/realtimeproducts");
}); */

export default realtimeproducts;