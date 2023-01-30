// CLASE 9 = Router & Multer
// Alumno: Daniel Tenconi → Primer Pre-Entrga

import express from "express";
// import PM from './prodManager.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importo Rutas
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";

// Routes:
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

// # Litsening:
app.listen(8080, (req, res) => {
  console.log("Listening 8080");
});
