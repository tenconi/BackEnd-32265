import { cartModel } from '../../models/cart.models.js';
import { productsModel } from '../../models/products.models.js'


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
            const allCarts = await cartModel.find().lean();
            // console.log(allCarts);
            return allCarts
        } catch (error) {
            return error;
        }
    }

    async getCartById(id) {
        try {
            const getCart = await cartModel.findById( id );
            // console.log(getCart.productList);
            return getCart.productList;
        } catch (error) {
            return error;
        }
    }

    async addProductsToCart(cid, pid, quantity) {

        try {
            const getCart = await cartModel.findById(cid); // Busco el Cart
            const getProd = await productsModel.findById(pid); // Traigo Productos

            if (getCart) {
                const compare = getCart.productList.find(e => e.productId == pid);
                if (compare) {

                    // si existe edito las cantidades
                    const addQuantity = getCart.productList.map(el => {
                        if (el.productId == pid) {
                            el.quantity += quantity;
                        }
                        return el;
                    })
                    return await cartModel.findByIdAndUpdate(cid, { productList: addQuantity });

                } else {
                    // si No existe hago un push al array
                    const addToCart = await cartModel.findByIdAndUpdate( { '_id' : cid } , {$push: { productList:  {productId : pid , productName: getProd.name  , quantity: quantity }}});

                    return addToCart 
                }
            }

        } catch (error) {
            console.log(error);
        }
    }


}