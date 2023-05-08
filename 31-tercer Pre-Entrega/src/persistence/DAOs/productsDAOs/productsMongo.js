import { productModel } from '../../mongo/models/product.models.js';
import aggregatePaginate  from 'mongoose-aggregate-paginate-v2'

export default class ProductsMongoManager {
  async allProducts(limit, page) {
    try {
      const getProds = await productModel.aggregatePaginate( {}, { limit, page } );
      return getProds;
    } catch (error) {
      return error;
    }
  }

  async productById(id) {
    try {
      const getProdById = await productModel.find({_id:id});
      return getProdById;
    } catch (error) {
      return error;
    }
  }

  async add(prod) {
    try {
      const newProd = await productModel.create(prod);
      return newProd;
    } catch (error) {
      return error;
    }
  }

  async deleteProduct(id) {
    try {
      const delProd = await productModel.deleteOne({ _id: id });
      return 'Producto eliminado correctamente.';
    } catch (error) {
      return error;
    }
  }
}
