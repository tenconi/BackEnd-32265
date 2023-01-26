// CLASE 9 = Router & Multer
// Alumno: Daniel Tenconi → Primer Pre-Entrga

import express from "express";
import PM from './prodManager.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const prodMan = new PM('./files/Productos.json')


// rutas

app.get('/', (req, res)=>{
    const file = prodMan.getFile();
    res.json(file)
})

app.post('/', (req, res)=>{
    const prod = req.body;
    prodMan.addProduct(prod);
    res.json({message:`→ Producto creado exitosamente:`, prod})
})

app.get('/:pid', (req, res)=>{
    const {pid} = req.params;
    const product = prodMan.getProductById(parseInt(pid));
    res.json({ message: `→ Resultado de su busqueda : ${pid} encontrado`, product })
})

app.put('/:pid', (req, res)=>{
    const {pid} = req.params;
    const  newValor = req.body;
    const field = Object.keys(newValor).toString(); // lo paso a string xq me llega como array
    const value = Object.values(newValor).toString(); // lo paso a string xq me llega como array
    const prodEdit = prodMan.updateProduct(pid, field, value); // id, campo , nuevoValor // `"${field}"` , `"${value}"`
    res.json({message:'Producto editado correctamente', prodEdit})
    console.log(Object.keys(newValor), Object.values(newValor));
    console.log(prodEdit);
    console.log(pid, field, value);
})


// # Litsening:
app.listen(8080, (req, res)=>{
    console.log("Listening 8080");
})
