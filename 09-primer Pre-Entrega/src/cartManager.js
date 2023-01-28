import fs from "fs";

export default class CartManager {
  construct() {
    this.cart = [];
  }

  addToCart(id) {
    const getProds = this.#getProds()
    let getItem = getProds.find((x)=>x.id === id);
    let getCart = this.getPurchases();
    // let getItemJS = JSON.stringify(getItem)
    // this.cart.push(getItem)
    getCart.push(getItem);
    fs.writeFileSync('./files/Cart.json', JSON.stringify(getCart))
    return `Producto agregado correctamente: ${JSON.stringify(getItem)}`;

    /* if(fs.existsSync('./files/Cart.json')){
        fs.writeFileSync('./files/Cart.json', getItem, 'utf-8')
    }else{
        return []
    } */

  }

  getPurchases() {
    if(fs.existsSync('./files/Cart.json')){
        const readFile = fs.readFileSync('./files/Cart.json', 'utf-8');
        const readFileJS = JSON.parse(readFile);
        return readFileJS;
    }else{
        return [];
    }
  }

  getPurchaseById(id) {}

  #getProds() {
    try {
      if (fs.existsSync("./files/Productos.json")) {
        // * * * Buscar manera para que sea DINAMICO
        const getProds = fs.readFileSync("./files/Productos.json", "utf-8");
        const getProdsJS = JSON.parse(getProds);
        return getProdsJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log("→ ERROR: ", error);
    }
  }
}

// const cart = new CartManager()

// console.log();
