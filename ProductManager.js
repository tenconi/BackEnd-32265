// CLASE 5 = Manejo de archivos en JavaScript
// Alumno: Daniel Tenconi
const fs = require("fs");

class ProductManager {
  constructor() {
    this.path = "./Archivo.JSON";
  }

  async addProduct(prod) {
    const { id= await this.generateID(), title, description, price, thumbnail, code, stock } = prod;
    const producto = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const consultoFile = await this.getFile();
    consultoFile.push(producto);
    await fs.promises.writeFile(this.path, JSON.stringify(consultoFile));
  }

  async getFile() {
    try {
      if (fs.existsSync(this.path)) {
        const productos = await fs.promises.readFile(this.path, "utf-8");
        const productosJS = JSON.parse(productos);
        // return console.log(productosJS[1].id);
        return productosJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log(" → → → CA ERROR!", error);
    }
  }

  async generateID() {
    let estado = await this.getFile();
    let id = 1;
    if (estado.length != 0) {
      id = estado[estado.length - 1].id + 1;
    }
    return id;

  /* try {
    let estado = await this.getFile();
    let id = 1;
    if (estado.length != 0) {
      id = estado[estado.length - 1].id + 1;
    }
    return id;

  } catch (error) {
    console.log(" → → → id ERROR!", error);
  } */
}
}

/* ↓ ↓ ↓ TEST ↓ ↓ ↓ */
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
  // const consultaArchivo = await producto.getFile();
  // console.log(consultaArchivo);

  // # Creo Productos
  await producto.addProduct(objeto1);
  await producto.addProduct(objeto2);
  await producto.addProduct(objeto3);

  // # producto.generateID();
  // console.log(await producto.generateID());
}
testeando();
