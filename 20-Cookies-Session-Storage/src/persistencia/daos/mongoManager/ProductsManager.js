import { productsModel } from '../../models/products.models.js';

export default class ProductsManager {

    async getAllProducts(limit, page) {
        try {
            const getProds = await productsModel.aggregatePaginate({}, { limit, page });
            // console.log(getProds);
            return getProds;
        } catch (error) {
            return error;
        }
    }

    async getProductById(id) {
        try {
            const getProdById = await productsModel.find({ '_id': id });
            // console.log(getProdById);
            return getProdById;
        } catch (error) {
            return error;
        }
    }

    async addProduct(prod) {
        try {
            const newProd = await productsModel.create(prod);
            return newProd;
        } catch (error) {
            return error;
        }
    }

    async deleteProduct(id){
        try {
            const delProd = await productsModel.deleteOne({ '_id' : id})
            return 'Producto eliminado correctamente.'
        } catch (error) {
            return error;
        }
    }

}