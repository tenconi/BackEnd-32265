import { cartModel } from "../models/cart.models.js";
import { productsModel } from "../models/product.models.js"; //productos

export default class CartManager {
    async addToCart( id ) {        
        try {
            const getProd = await productsModel.find({ '_id' : id }); // traigo elemento de "productos". Este id es "idProd" en el cart != al id del cart.
            // return 'seleccionaste', getProd[0].name; // me devuelve array con un objeto

            const compare = await cartModel.find({ 'idProd' : id}); // busca en en "cart"
                
            if (compare.length === 0) {
                const adding = await cartModel.insertMany({"idProd": getProd[0]._id, "name": getProd[0].name, "quantity":1 }); // agrego nuevo
                return {adding};
            } else {
                await cartModel.updateOne({ 'idProd' : id}, {$inc: {quantity : +1}}); // sumo uno
                return ' Se agregó una unidad.';
            }
        } catch (error) {
            return error
        }
    }

    async getPurchases() {
        try {
            const getPurchases = await cartModel.find();
            return getPurchases;
        } catch (error) {
            return error
        }
    }

    async getPurchaseById( id ) {
        try {
            const getPurchasesById = await cartModel.find({ '_id' : id });
            return getPurchasesById;
        } catch (error) {
            return error
        }
    }

    async deletePurchase( id ) {
        try {
           const delProd = await cartModel.deleteOne({'_id': id});
           return 'Producto eliminado'
        } catch (error) {
            return error
        }
    }
}