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
    
    async addProduct( prod ) {
        try {
            const newProd = await productsModel.create( prod );
            return newProd;
        } catch (error) {
            return error;
        }
    }

    async getProductById( id ) {
        try {
            const getProdById = await productsModel.find({'_id' : id });
            return getProdById;
        } catch (error) {
            return error;
        }
    }

    async updateProduct( id , field , value ) {
        // console.log(id, field, campo, value);        
        
        try {
            const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ field : value}} ); // NO LEVANTA field :(
            return 'prod editado ok ', editProd
        } catch (error) {
            return error;
        }
    }

    async deleteProduct( id ){
        try {
            const delProd = await productsModel.deleteOne({ '_id' : id})
            return 'Producto eliminado correctamente.'
        } catch (error) {
            return error;
        }
    }

    async deleteFile() {
        try {
            const delAll = productsModel.remove({}); // remueve todo PERO no la coleccion.
        } catch (error) {
            return error;
        }
    }
}