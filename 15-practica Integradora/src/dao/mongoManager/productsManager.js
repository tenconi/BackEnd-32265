import { productsModel } from "../models/product.models.js";

export default class ProductsManager {
    async getAllProducts() {
        try {
            const getProds = await productsModel.find();
            return getProds;
        } catch (error) {
            return error;
        }
    }    
}