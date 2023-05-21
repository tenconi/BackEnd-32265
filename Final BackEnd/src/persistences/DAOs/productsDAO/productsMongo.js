// # DAO = Data Access Object
import { ProductsModel } from '../../mongo/models/products.model.js';
import BasicMongo from '../basicMongo.js';

class ProductsMongo extends BasicMongo {
  constructor(model) {
    super(model);
  }

  async create(obj) {
    const { name, description, category, code, thumbnail, price, stock, status } = obj;
    try {
        const checkExistence = await ProductsModel.find({ name});
        if(checkExistence.length === 0){
            const newObj = {...obj, code: new Date().getTime()};
            const newProd = await ProductsModel.create(newObj);
            return newProd;
        }
        return null;
    } catch (error) {
      return error;
    }
  }

  async getAll(){
    try {
        const allProducts = await ProductsModel.find({}).lean();
        return allProducts;
    } catch (error) {
        return error;
    }
  }
 
}

export default new ProductsMongo(ProductsModel); //instancio y (le paso el modelo)
