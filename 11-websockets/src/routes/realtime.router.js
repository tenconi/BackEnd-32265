import { Router } from "express";
import PM from "../prodManager.js";
import { __dirname } from "../utils.js";

import { socketServer } from "../server.js";
// const prodSocket = io();

const realtimeproducts = Router();

const prodMan = new PM(__dirname+'/files/Productos.json');

realtimeproducts.get("/", (req, res) => {
  const { limit } = req.query;
  let file = prodMan.getFile();

  if (limit && !isNaN(limit)) {
    file = file.slice(0, limit);
  }
  
  socketServer.emit('fileList', 'mensaje desde realtime.router')

  res.render("realtimeproducts", {file}); // renderizo
});

realtimeproducts.post("/", (req, res) => {
    const file = req.body;
  prodMan.addProduct(prod);
  res.json({ message: `→ Producto creado exitosamente:`, file });
  
  // socketServer.sockets.emit("sendProduct", prod);

  res.render("realtimeproducts", {file});
  res.redirect("/realtimeproducts");
});

export default realtimeproducts;