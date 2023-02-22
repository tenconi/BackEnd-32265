import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

// import viewsRouter from "./routes/views.router.js";
import realTimeRouter from "./routes/realtime.router.js";
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";

// *** Paso "productos" para mostrar desde esta importación, ya que me resultó imposible pasar desde "realProds.js" a "index.js"
import ProductManager from "./prodManager.js";
const PM = new ProductManager( __dirname + '/files/Productos.json');

const prodsRealTime = PM.getFile();
// console.log(prodsRealTime); // muestra OK

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

  socket.emit('realProds', prodsRealTime);

});

