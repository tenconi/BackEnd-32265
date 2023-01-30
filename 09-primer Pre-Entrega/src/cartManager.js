import fs from "fs";

export default class CartManager {
  construct() {
    this.cart = [];
  }

  addToCart(id) {
    const getProds = this.#getProds()
    let getItem = getProds.find((x)=>x.id === id);
    let getCart = this.getPurchases(); 

    let purch = {
        id :getItem.id,
        title : getItem.title,
        amount: 1
    }
    
    const getCartProd = getCart.find((x)=>x.id === id); 

    if(getCartProd){
        const getCartRest = getCart.filter((x) => x.id != id); // consigo los restantes
        purch.amount = getCartProd.amount + 1;
        let concatenados = getCartRest.concat(purch);
        fs.writeFileSync('./files/Cart.json', JSON.stringify(concatenados));
        return `Producto agregado Anteriormente. Se sumó una Unidad.`;
    }else{
        getCart.push(purch);
        fs.writeFileSync('./files/Cart.json', JSON.stringify(getCart))
        return `Producto agregado correctamente:`;
    }

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
