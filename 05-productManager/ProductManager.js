// CLASE 5 = Manejo de archivos en JavaScript
// Alumno: Daniel Tenconi
const fs = require("fs");

class ProductManager {
  constructor() {
    this.path = "./Archivo.JSON";
  }

  async addProduct(prod) {
    const { title, description, price, thumbnail, code, stock } = prod;
    const producto = {
      id: await this.#generateID(),
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
    console.log("→ → → Producto creado correctamente.");
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

  async getProductById(id) {
    let checkin = await this.#checkId(id);
    let estado = await this.getFile();

    if (checkin) {
      return console.log(
        `→ → → Resultado de ID ${id}:`,
        estado.find((x) => x.id === id)
      );
    } else {
      console.log("→ → → Error ID Not Found!");
    }
  }

  async deleteProduct(id) {
    let estado = await this.getFile();
    let newEstado = estado.filter((x) => x.id != id);
    await fs.promises.writeFile(this.path, JSON.stringify(newEstado));
    console.log(`ID ${id} borrado exitosamente`);
  }

  async updateProduct(id, field, value) {
    let estado = await this.getFile();
    const result = estado.find((x) => x.id === id);
    const restEstado = estado.filter((x) => x.id != id);
    result[field] = value;
    let concatenado = restEstado.concat(result);

    if (!id || !field || !value) {
      console.log("→ → → Error : Deben completarse todos los campos");
    } else {
      fs.promises.writeFile(this.path, JSON.stringify(concatenado));
      console.log(`ID ${id} modificado correctamente`);
    }
  }

  async #generateID() {
    let estado = await this.getFile();
    let id = 1;
    if (estado.length != 0) {
      id = estado[estado.length - 1].id + 1;
    }
    return id;
  }

  async #checkId(id) {
    let estado = await this.getFile();
    return estado.find((x) => x.id === id);
  }
}

/* ↓ ↓ ↓ COMANDS TEST ↓ ↓ ↓ */
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

  // ### Creo Productos
  // await producto.addProduct(objeto1);
  // await producto.addProduct(objeto2);
  // await producto.addProduct(objeto3);

  // ### getProductById():
  // await producto.getProductById(1);

  // ### updateProduct():
  // await producto.updateProduct(3, "title", "Nuevo Titular"); // Lo agrega al final

  // ### deleteProduct():
  // await producto.deleteProduct(5)

  // ### producto.#generateID();
  // console.log( await producto.#generateID()); // → pasar a publica para testear
}
testeando();
