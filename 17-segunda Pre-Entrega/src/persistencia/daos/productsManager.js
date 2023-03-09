import { productsModel } from "../models/product.models.js";

export default class ProductsManager {
    async getAllProducts( limit , page) {
        try {
            const getProds = await productsModel.paginate( {} , {limit, page});
            return getProds ;
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
        // console.log(id, field,  value); 

        try {
            // const editProd = productsModel.updateMany( { '_id' : id }, {$set:{ field : value}} ); // NO LEVANTA field :(
                if(field === "name"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "name" : value } }); 
                    return editProd
                }

                if(field === "description"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "description" : value } }); 
                    return editProd
                }

                if(field === "code"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "code" : value } }); 
                    return editProd
                }

                if(field === "price"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "price" : value } }); 
                    return editProd
                }

                if(field === "status"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "status" : value } }); 
                    return editProd
                }

                if(field === "category"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "category" : value } }); 
                    return editProd
                }

                if(field === "stock"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "stock" : value } }); 
                    return editProd
                }

                if(field === "thumbnail"){
                    const editProd = productsModel.updateOne( { '_id' : id }, {$set:{ "thumbnail" : value } }); 
                    return editProd
                }

                // console.log(id, field, value);
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