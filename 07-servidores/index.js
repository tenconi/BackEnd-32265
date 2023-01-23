// CLASE 7 = Servidores
// Alumno: Daniel Tenconi

import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import PM from './class/ProductManager.js';
const prodManager = new PM('./PROD.json');


// # ENDPOINTS:
// Muestro todos los productos:
app.get('/products', async (req, res)=>{
    const limit = req.query; // /products?limit=4
    const file = await prodManager.getFile(req.query); // levanto/condiciono los query desde "ProductManager"
    res.json({message: 'Productos encontrados exitosamente', file, limit});
})

// Agrego productos:
app.post('/products', async (req, res)=>{
    const prod = req.body;
    await prodManager.addProduct(prod);
    res.json({message: `${prod.title} → creado con exito`})
})


// Producto seleccionado:
app.get('/products/:pid', async (req, res)=>{
    const {pid} = req.params;
    const file = await prodManager.getProductById(parseInt(pid));
    res.json({message: 'Id ${pid} encontrado'});
})



// # LISTENER:
app.listen(8080, ()=>{
    // console.log('Listening 8080');
})