const socketClient = io(); 

socketClient.on('saludo', (mensaje)=>{
    console.log('El servidor envio este mensaje:', mensaje);

    socketClient.emit('respuestaSaludo', 'RS: Muchas gracias')
})

