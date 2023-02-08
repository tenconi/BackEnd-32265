const socketProds = io(); 

/* 
const formulario = document.getElementById('formulario');
const title = document.getElementById('title');
const description = document.getElementById('description');
const code = document.getElementById('code');
const price = document.getElementById('price');
let state = document.getElementById('status');

const category = document.getElementById('category');
const stock = document.getElementById('stock');
const thumbnail = document.getElementById('thumbnail');

const portaCards = document.getElementById('portaCards');

formulario.onsubmit = (e) =>{
    e.preventDefault();

    let product = {
        title: title.value,
        description : description.value,
        code: code.value,
        price: price.value,
        status:state.checked,
        stock: stock.value,
        category: category.value,
        thumbnail: [thumbnail.value]
    }
    console.log(product)
    socketProds.emit('newProduct', product);
    formulario.reset()
} */



/* socketProds.on('listado', ()=>{
    console.log('file');
}) */

/* socketProds.on('listaProds', listaProds=>{
        console.log(listaProds)
}) */
/* socketProds.on('listadoProds', (listProds)=>{

    const listado = listProds.map(e=>{
        return `
            <div class="card">
        
                <div class="portaImg">
                      <img src=${e.thumbnail} >
                </div>
                <div class="cardInfo">
                    <h2>${e.title}</h2>
                    <p>${e.description}</p>
                    <p><strong>$ ${e.price}</strong></p>
                </div>
            </div>
        `
    })1
    portaCards.innerHTML = listado
}) */

/* socketProds.on('listaProds', file=>{
    const listado = file.map(e=>{
        return `
            <div class="card">
        
                <div class="portaImg">
                      <img src=${e.thumbnail} >
                </div>
                <div class="cardInfo">
                    <h2>${e.title}</h2>
                    <p>${e.description}</p>
                    <p><strong>$ ${e.price}</strong></p>
                </div>
            </div>
        `
    })
    portaCards.innerHTML = listado
}) */


/* socketProds.on('mensajeGral', algo=>{
    console.log(algo); // recibo OK de server.js
}) */
socketProds.on('fileList', (esto)=>{
    console.log('esto', esto);
})