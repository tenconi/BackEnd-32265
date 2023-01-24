// CLASE 7 = Servidores
// Alumno: Daniel Tenconi
import fs from "fs";
import { parse } from "path";

export default class ProductManager {
  constructor() {
    this.path = "./Archivo.JSON";
  }

  async addProduct(prod) {
    const { title, description, price, thumbnail, code, stock } = prod;
    const producto = {
      id: await this.#generateID(),
      title, description, price, thumbnail, code, stock,
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

    let estado = await this.getFile(); // ¿?

    if (checkin) {
      return `→ → → Resultado de ID ${id}:`, estado.find((x) => x.id === id);
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
