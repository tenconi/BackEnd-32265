import { productsModel } from '../../models/products.models.js';

export default class ProductsManager {

    async getAllProducts(limit, page) {

        try {
            const getProds = await productsModel.aggregatePaginate({}, { limit, page });
            // const getProds = await productsModel.find( {});
            // console.log(getProds.docs);
            return getProds.docs;
        } catch (error) {
            return error
        }
    }
}