import {cartModel} from '../../models/cart.models.js';


export default class CartManager {
    async createCart() {
        try {
            const createCart = await cartModel.create({
                cart: []
            });
            return createCart;
        } catch (error) {
            return error;
        }
    }

    // listo todo los carros creados solo para ver
    async getAllCarts() {
        try {
            const allCarts = await cartModel.find({});
            console.log(allCarts);
            return allCarts
        } catch (error) {
            return error;
        }
    }

    async getCartById(id) {
        try {
            const getCart = await cartModel.findById(id);
            return getCart;
        } catch (error) {
            return error;
        }
    }
}