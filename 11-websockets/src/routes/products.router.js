import { Router } from "express";
import { __dirname } from "../utils.js";
import PM from "../prodManager.js";

const router = Router();
const prodMan = new PM(__dirname+'/files/Productos.json');



router.get("/", (req, res) => {
  const { limit } = req.query;
  let file = prodMan.getFile();

  if (limit && !isNaN(limit)) {
    file = file.slice(0, limit);
  }
  // res.json(file);
  // console.log();
  res.render('home', {file})
 
});

router.post("/", (req, res) => {
  const prod = req.body;
  prodMan.addProduct(prod);
  res.json({ message: `→ Producto creado exitosamente:`, prod });
});

router.get("/:pid", (req, res) => {
  const { pid } = req.params;
  const product = prodMan.getProductById(parseInt(pid));
  /* res.json({
    message: `→ Resultado de su busqueda : ${pid} encontrado`,
    product,
  }); */
  // console.log(product);
  res.render('home', {product})
});

router.put("/:pid", (req, res) => {
  const { pid } = req.params;
  const newValor = req.body;
  const field = Object.keys(newValor).toString(); // lo paso a string xq me llega como array
  const value = Object.values(newValor).toString(); // lo paso a string xq me llega como array
  const prodEdit = prodMan.updateProduct(parseInt(pid), field, value); // id, campo , nuevoValor // `"${field}"` , `"${value}"`

  res.json({ message: "Producto editado correctamente", prodEdit });
});

router.delete("/:pid", (req, res) => {
  const { pid } = req.params;
  prodMan.deleteProduct(parseInt(pid));
  res.json({ message: `Producto con ID ${pid} eliminado correctamente.` });
});


export default router;
