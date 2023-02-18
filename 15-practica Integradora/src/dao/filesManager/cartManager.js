import fs from 'fs';
import { __dirname } from '../../utils.js';

const path = __dirname + '/Cart.json' ;
const productsPath = __dirname + '/Products.json';

export default class CartManager {
  construct() {
    // this.cart = [];
    // this.path=path;
  }

  async addToCart(id) {
    const getProds = await this.#getProds();
    let getItem = getProds.find((x) => x.id === id);
 
    let getCart =  await this.getPurchases();

    let purch = {
      id: getItem.id,
      name: getItem.name,
      quantity: 1,
    };

    const getCartProd = getCart.find((x) => x.id === id);

    if ( getCartProd ) {
      const getCartRest = getCart.filter((x) => x.id != id); // consigo los restantes
      purch.quantity = getCartProd.quantity + 1;
      let concatenados = getCartRest.concat(purch);

      await fs.promises.writeFile( path, JSON.stringify( concatenados ));
      return `Producto agregado Anteriormente. Se sumó una Unidad.`;
    } else {
      getCart.push(purch);
      await fs.promises.writeFile(path, JSON.stringify(getCart));
      return `Producto agregado correctamente:`;
    }
  }

  async getPurchases() {
    if (fs.existsSync(path)) {
      const readFile = await fs.promises.readFile( path, 'utf-8' );
      const readFileJS = JSON.parse( readFile );
      return "su compra", readFileJS;
    } else {
      return [];
    }
  }

  getPurchaseById(id) {
    const getProds = this.getPurchases();
    const searchId = getProds.find((x) => x.id === id);
    if (searchId) {
      return searchId;
    } else {
      return "Producto no agregado al carrito.";
    }
  }

  deletePurchase(id) {
    const getProds = this.getPurchases(id);
    let validation = getProds.find((x) => x.id == id);

    if (validation) {
      let searchOthers = getProds.filter((x) => x.id != id);
      fs.writeFileSync(path, JSON.stringify(searchOthers));
      return `Elemento con id: ${id} eliminado correctamente.`;
    } else {
      return `Elemento con id: ${id} no encontrado`;
    }
  }

 async #getProds() {
    try {
      if (fs.existsSync( productsPath )) {
        // * * * Buscar manera para que sea DINAMICO
        const getProds = await fs.promises.readFile( productsPath , 'utf-8');
        return JSON.parse( getProds );
      } else {
        return [];
      }
    } catch (error) {
      return error;
    }
  }
}