// CLASE 3 = Alumno: Daniel Tenconi

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, stock, thumbnail, code) {
    if (!title || !description || !price || !stock || !thumbnail || !code) {
      //valido los campos
      console.log("Error al agregar producto: Debe completar todos los campos");
    } else {
      //chqueo codigos repetidos
      let evaluarcodigo = this.#chequearCodigo(code);
      if (evaluarcodigo) {
        return console.log(code + ": Código precargado. Modifiquelo.");
      } else {
        // genero el producto
        const producto = {
          id: this.#generarId(), // id generado automaticamente
          title,
          description,
          price,
          stock,
          thumbnail,
          code,
        };
        this.products.push(producto);
        console.log("Producto creado correctamente.");
      }
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let evaluarId = this.#chequearId(id);
    if (evaluarId) {
      console.log(
        "Resultado de la busqueda por ID:",
        this.products.find((x) => x.id === id)
      );
    } else {
      console.log("Error ID Not Found!");
    }
  }

  #generarId() {
    let id = 1;
    if (this.products.length != 0) {
      id = this.products[this.products.length - 1].id + 1;
    }
    return id;
  }

  #chequearId(id) {
    return this.products.find((prod) => prod.id === id);
  }

  #chequearCodigo(code) {
    return this.products.find((prod) => prod.code === code);
  }
}

// → → → Creo Objeto Principal:
const prod = new ProductManager();

// → → → Agrego producto: "addProduct":
prod.addProduct(
  "Uno",
  "Es un numero uno.",
  10,
  5,
  "https://st3.depositphotos.com/1654249/13060/i/450/depositphotos_130607128-stock-photo-3d-gold-number-one-isolated.jpg",
  23010501
);
prod.addProduct(
  "Dos",
  "Es un pato.",
  20,
  5,
  "https://th.bing.com/th/id/R.98a62485aa2b76ae2dc4a9a399d31057?rik=hSvhQD76O774qA&pid=ImgRaw&r=0",
  23010502
);
prod.addProduct(
  "Tres",
  "Es una B sin hasta.",
  30,
  5,
  "https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8292990-stock-photo-the-number-3-in-gold.jpg",
  23010503
);

// → → → Devuelvo productos: "getProducts":
console.log(prod.getProducts());

// → → → Chequeo por codigos repetidos ↓↓↓
/* 
prod.addProduct('Uno Bis', 'Es un numero uno.', 10, 5, 'https://st3.depositphotos.com/1654249/13060/i/450/depositphotos_130607128-stock-photo-3d-gold-number-one-isolated.jpg', 23010501);
console.log(prod.getProducts()); 
*/

// → → → Devuelvo producto por ID= "getProductById":
prod.getProductById(1);
