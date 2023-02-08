import { Router } from "express";
import { Server } from "socket.io";
import ProductManager from "../clases/ProductManager.js";
import { socketServer } from "../server.js";

import { __dirname } from "../utils.js";

const realtimeproducts = Router();
const prodMan = new PM(__dirname+'/files/Productos.json');


realtimeproducts.get("/", (req, res) => {
  const { limit } = req.query;
  let file = prodMan.getFile();

  if (limit && !isNaN(limit)) {
    file = file.slice(0, limit);
  }
  res.render("realtimeproducts", { file });
});

realtimeproducts.post("/", (req, res) => {
    const prod = req.body;
  prodMan.addProduct(prod);
  res.json({ message: `→ Producto creado exitosamente:`, prod });
  
  socketServer.sockets.emit("sendProduct", prod);

  res.redirect("/realtimeproducts");
});

export default realtimeproducts;