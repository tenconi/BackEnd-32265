const socketProds = io(); 
/* socketProds.on('delCliente', (esto) => {
    console.log(`"Levanto desde index.js"`, esto);
}) */
console.log('Hey desde Index.js');
socketProds.emit('delIndex', 'Mens enviado desde Index.js')

/* socketProds.on('saludo', (mensaje)=>{
    console.log('El servidor envio este mensaje:', file);

    socketProds.emit('respuestaSaludo', 'RS: Muchas gracias');
    
}) */

/* 
socketProds.emit('test',()=>{
    return 'Hola Perri'; 
}) */

/* socketProds.on('mensajeGral', estoNuevo =>{
    console.log(estoNuevo);
}) */