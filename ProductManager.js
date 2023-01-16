// CLASE 5 = Manejo de archivos en JavaScript
// Alumno: Daniel Tenconi
const fs = require("fs");

class ProductManager {
  constructor() {
    this.path = "./Archivo.JSON";
  }

  async crearProducto(prod) {
    const {title, description, price, thumbnail, code, stock} = prod;
    const producto = {
        id: this.generarID(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }

    const consultoFile = await this.consultarArchivo();
    consultoFile.push( producto);
    await fs.promises.writeFile(this.path, JSON.stringify(consultoFile));    
  }

  async consultarArchivo(prod) {
    try {
      if (fs.existsSync(this.path)) {
        const productos = await fs.promises.readFile(this.path, "utf-8");
        const productosJS = JSON.parse(productos);
        return productosJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log(" → → → CA ERROR!", error);
    }
  }

    generarID(){
        let id = 1;
    
        try {
            let estado =  this.consultarArchivo(); // {objeto}

        // let estadoParse = JSON.parse(estado)
        let estadoStringify =  JSON.stringify(estado) // solo lee un "objeto_vacio"
        return estadoStringify

        } catch (error) {
            console.log(error);
        }
        

       
        
        /* if(!estadoJS.length){
            id = estadoJS[estadoJS.length - 1].id + 1;
        }  */
        // return id 
        
    }

    
}

/* TEST */

const producto = new ProductManager();

const objeto1 = {
  title: "Producto Uno",
  description: "Esto es un producto listo para usarse.",
  price: 24,
  thumbnail:
    "https://st3.depositphotos.com/1654249/13060/i/450/depositphotos_130607128-stock-photo-3d-gold-number-one-isolated.jpg",
  code: "code007",
  stock: 6,
};
const objeto2 = {
  title: "Producto Dos",
  description: "Esto es un producto listo para usarse.",
  price: 18,
  thumbnail:
    "https://st3.depositphotos.com/1654249/13060/i/450/depositphotos_130607128-stock-photo-3d-gold-number-one-isolated.jpg",
  code: "code001",
  stock: 7,
};
const objeto3 = {
    title: "Producto Tres",
    description: "Esto es un producto tricotero.",
    price: 30,
    thumbnail:
      "https://st3.depositphotos.com/1654249/13060/i/450/depositphotos_130607128-stock-photo-3d-gold-number-one-isolated.jpg",
    code: "code003",
    stock: 4,
  };

/* ---- */
async function testeando() {
//   const consultaArchivo = await producto.consultarArchivo();
//   console.log(consultaArchivo);

// # Creo Productos
//   await producto.crearProducto(objeto1);
//   await producto.crearProducto(objeto2);
//   await producto.crearProducto(objeto3);

console.log(producto.generarID())
}
testeando();

// • Devuelvo productos:
// console.log(prod1.devolverProductos());

// • Busco producto por Id:
// prod1.obtenerPorID(2)
