// SERVICE : recibe lo que especificamente envia el controlador (no el objeto req completo)
import ProductsMongo from '../persistences/DAOs/productsDAO/productsMongo.js';

class ProductsServices {
  constructor(dao) {
    this.dao = dao;
  }

  createProduct = async (obj) => {
    const newProd = this.dao.create(obj); // levanto fx de "dao"
    return newProd;
  };

  viewAll = async () => {
    const allProds = await this.dao.getAll();
    return allProds;
  };
}
export default new ProductsServices(ProductsMongo); // le paso el dao
