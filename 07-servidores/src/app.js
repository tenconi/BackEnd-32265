// CLASE 7 = Servidores
// Alumno: Daniel Tenconi

import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import PM from "./ProductManager.js";
const prodManager = new PM("Archivo.json");

// # ENDPOINTS:
// Muestro todos los productos:
app.get("/products", async (req, res) => {
  const limit = req.query.limit; // /products?limit=4
  let file = await prodManager.getFile();

  if (req.query.limit && !isNaN(req.query.limit)) {
    file = file.slice(0, limit);
  }
  return res.json(file);
});

// Agrego productos:
app.post("/products", async (req, res) => {
  const prod = req.body;
  await prodManager.addProduct(prod);
  res.json({ message: `${prod.title} → creado con exito` });
});

// Producto seleccionado:
app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params;
  const file = await prodManager.getProductById(parseInt(pid));
  res.json({ message: `Id ${pid} encontrado`, file });
});

// # LISTENER:
app.listen(8080, () => {
  console.log("Listening 8080");
});
