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
    console.log('→ → → Producto creado correctamente.');
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
    // const toCompare = newEstado.find ((x) => {x.id === id})
    // console.log(newEstado); // devuelve OK

    /* if(newEstado.find(x=> x.id != id)){
      
      console.log('error al borrar');
    }else{
      await fs.promises.writeFile(this.path, JSON.stringify(newEstado));
      console.log(`ID ${id} borrado exitosamente`);
    } */

   /*  if(newEstado){
      await fs.promises.writeFile(this.path, JSON.stringify(newEstado));
      console.log(`ID ${id} borrado exitosamente`);
    }else{
      console.log(`→ → → Error: ID ${id} no encontrado `);
    } */
    // console.log(newEstado);
  }

  async updateProduct(id, field, value) {
    let estado = await this.getFile();
    const result = estado.find((x) => x.id === id);

    // console.log(result.title);// trae titulo
    // console.log(result[field]); // trae OK
    // console.log(value); // trae OK

    /* if(result){

      let editedObjet = ; 

    }else{
      console.log('→ → → UP Error !');
    } */
    /* switch (field) {    
      case "title":
        field = value;
        console.log("Llegaste ACA 1", value);
        break;
      case "description":
        field = value;
        console.log("Llegaste ACA 2", value);
        break;
      case "price":
        field = value;
        console.log("Llegaste ACA 3", value);
        break;
      case "code":
        field = value;
        console.log("Llegaste ACA 4", value);
        break;
      case "stock":
        result[field] = value;
        console.log("Llegaste ACA 5", value);
        break;
    } */

    //  this.addProduct()
    //     console.log("Editado Correctamente");

    /* 
    if(result[field]){
      fs.writeFile(this.path, JSON.stringify(estado));
    console.log("Editado Correctamente");
    } */

    // fs.writeFile(this.path, JSON.stringify(estado));
  }

  async #generateID() {
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
  // await producto.updateProduct(3, "title", "Nuevo Titular");

  // ### deleteProduct():
  // await producto.deleteProduct(3)
  // await producto.deleteProduct(5)

  // ### producto.#generateID();
  // console.log( await producto.#generateID()); // → pasar a publica para testear
}
testeando();
