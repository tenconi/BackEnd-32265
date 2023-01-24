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
    const limit = req.query.limit; // /products?limit=4
    let file = await prodManager.getFile();
    
    if(req.query.limit && !isNaN(req.query.limit) ){
    //     console.log(limit);
    //     const file = await prodManager.getFile(req.query)
        file = file.slice(0, limit)
    }
    return res.json(file)
    
    // const file = await prodManager.getFile(req.query); // levanto/condiciono los query desde "ProductManager"
    // res.json({message: 'Productos encontrados exitosamente', file});
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
    // if (req.params.pid && !isNaN(req.params.pid)) {}
    const file = await prodManager.getProductById(parseInt(pid));
    res.json({message: `Id ${pid} encontrado`, file});
})



// # LISTENER:
app.listen(8080, ()=>{
    // console.log('Listening 8080');
})