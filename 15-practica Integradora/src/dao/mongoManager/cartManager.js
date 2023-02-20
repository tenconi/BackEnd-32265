import { cartModel } from "../models/cart.models.js";
import { productsModel } from "../models/product.models.js"; //productos

export default class CartManager {
    async addToCart( id ) {
        try {
            const getProd = await productsModel.find({ '_id' : id }); // traigo elemento de "productos"
            // return 'seleccionaste', getProd[0].name; // me devuelve array con un objeto

            /* let purch = {
                id: getProd[0]._id,
                name: getProd[0].name,
                quantity: 1,
            } */

            let quantity = 1

            const adding = await cartModel.insert({"id": getProd[0]._id, "name": getProd[0].name, "quantity":1 })
            return 'se ha añadido', adding

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
            
        } catch (error) {
            return error
        }
    }

    async deletePurchase( id ) {
        try {
            
        } catch (error) {
            return error
        }
    }
}