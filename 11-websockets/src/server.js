import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

// import viewsRouter from "./routes/views.router.js";
import realTimeRouter from "./routes/realtime.router.js";
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Archivos estáticos:
app.use(express.static(__dirname + "/publics"));

// Handlebars:
app.engine("handlebars", handlebars.engine()); // solo para HB o propio
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// rutas
app.use("/products", productsRouter);
app.use("/realtimeproducts", realTimeRouter);
// app.use("/api/products", productsRouter);
// app.use("/api/cart", cartRouter);



const httpServer = app.listen(8080, () => {
  console.log("Listening 8080");
});

//websocket:
export const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  socket.on("disconnect", (mensaje) => {
    console.log("Usuario desconectado");
  });

  socket.on('fileList', esto=>{
    console.log('esto',esto);
  })


  // lo envio desde 'js/realProds.js' - NO LEvanta
  socket.on('delCliente', (esto) =>{
    console.log(`"Levanto en server.js"`, esto); // ok
  })


  /* socket.on('newProduct', nuevoProd =>{
    // console.log( nuevo);
    arrayProds.push(nuevoProd)
    socket.broadcast.emit('listadoProds', arrayProds)
  }) */

//   socket.emit('mensajeGral', 'Este es un mensaje general que ebiera ser recibido en todos los sockets')


});

