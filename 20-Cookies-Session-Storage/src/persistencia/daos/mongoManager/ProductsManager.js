import { productsModel } from '../../models/products.models.js';

export default class ProductsManager {

    async getAllProducts(limit, page) {
        try {
            const getProds = await productsModel.aggregatePaginate({}, { limit, page });
            // const getProds = await productsModel.find( {});
            // console.log(getProds.docs);
            return getProds;
        } catch (error) {
            return error
        }
    }

    async getProductById(id) {
        try {
            const getProdById = await productsModel.find({'_id' : id});
            // console.log(getProdById);
            return getProdById
        } catch (error) {
            return error
        }
    }
}