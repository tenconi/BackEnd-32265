import fs from "fs";

export default class ProductManager {
  constructor(path) {
    this.path = path
  }

  getFile() {
    try {
      if (fs.existsSync(this.path)) {
        const readFile = fs.readFileSync(this.path, "utf-8");
        const readFileJS = JSON.parse(readFile);
        return readFileJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log("→ ERROR: ", error);
    }
  }

  addProduct(prod) {
    const {
      title, description, code, price, status = true, stock, category, thumbnail } = prod;
    prod = {
      id: this.#generateId(), title, description, code, price, status, category, stock, thumbnail };
    const consultoFile = this.getFile();
    consultoFile.push(prod);
    fs.writeFileSync(this.path, JSON.stringify(consultoFile));
    console.log("→ Producto creado correctamente.", prod);
  }

  getProductById(id) {
    let checkin = this.#checkId(id);
    let estado = this.getFile();
    if (checkin) {
      return `→ Resultado de ID ${id}:`, estado.find((x) => x.id === id);
    } else {
      return "→ Error ID Not Found!";
    }
  }

  deleteProduct(id) {
    let estado = this.getFile();
    let newEstado = estado.filter((x) => x.id != id);
    fs.writeFileSync(this.path, JSON.stringify(newEstado));
    console.log(`ID ${id} borrado exitosamente`);
  }

  updateProduct(id, field, value) {
    let estado = this.getFile();
    const result = estado.find((x) => x.id === id);
    const restEstado = estado.filter((x) => x.id != id);

    result[field] = value;
    let concatenado = restEstado.concat(result);

    console.log("concatenado", concatenado);

    if (!id || !field || !value) {
      console.log("→ Error : Deben completarse todos los campos");
    } else {
      fs.writeFileSync(this.path, JSON.stringify(concatenado));
      console.log(`ID ${id} modificado correctamente`);
    }
  }

  #generateId() {
    let estado = this.getFile();
    let id = 1;
    let searchMaxId =  estado.map(element => {
      return element.id
    });
    let maxId = Math.max(...searchMaxId)

    if(maxId == 0 || maxId == null || maxId == -Infinity){
      return id = 1
    }else if(maxId){
      return id= maxId + 1
    }

    /* // codigo incicial: seguia secuencia pero repetia los ids cuando se editaba
    if (estado.length != 0) {
      id = estado[estado.length - 1].id + 1;
    }
    return id; */
  }

  #checkId(id) {
    let estado = this.getFile();
    return estado.find((x) => x.id === id);
  }
}



// ### COMANDS TESTS:

/*  const prod = new ProductManager();
const prod1 = {
  title: "Producto Uno",
  description: "Esto es un producto listo para usarse.",
  price: 24,
  thumbnail:
    "https://st3.depositphotos.com/1654249/13060/i/450/depositphotos_130607128-stock-photo-3d-gold-number-one-isolated.jpg",
  code: "code007",
  stock: 6,
}; */

// console.log(prod.getFile());
// console.log(prod.getProductById(3));
// prod.getProductById(3)
// prod.addProduct(prod1)
// prod.deleteProduct(3)
// prod.updateProduct(5, 'title', 'NUEVO TITULO' ); //agrega al final
// prod.#checkId()
// console.log(prod.generateId())




