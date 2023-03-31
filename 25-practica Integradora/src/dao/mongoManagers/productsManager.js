import { productModel } from '../models/product.models.js' 

export default class ProductsManager {

    async getAllProducts(limit, page) {
        try {
            const getProds = await productModel.aggregatePaginate({}, { limit, page });
            // const getProds = await productModel.find({})
            // console.log(getProds);
            return getProds;
        } catch (error) {
            return error;
        }
    }

    async getProductById(id) {
        try {
            const getProdById = await productModel.find({ '_id': id });
            // console.log(getProdById);
            return getProdById;
        } catch (error) {
            return error;
        }
    }

    async addProduct(prod) {
        try {
            const newProd = await productModel.create(prod);
            return newProd;
        } catch (error) {
            return error;
        }
    }

    async deleteProduct(id){
        try {
            const delProd = await productModel.deleteOne({ '_id' : id})
            return 'Producto eliminado correctamente.'
        } catch (error) {
            return error;
        }
    }

}