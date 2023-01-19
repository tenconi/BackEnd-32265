// clase 06 - Servidor Web con Express
// Alumno: Daniel Tenconi

require('import-export');
const {ProductManager} = require('./src/ProductManager.js');

import express from 'express';
const app = express();


// import {ProductManager} from './src/ProductManager.js'

app.get('/', (req, res)=>{
    res.send('home');
})

app.get('/productos', (req, res)=>{
    res.send('Productos');
})


app.listen(8080, ()=>{
    console.log('lets Hack')
})