import { cartModel } from '../models/cart.models.js';
import { productsModel } from '../models/product.models.js'; //productos

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

    async getCartById(id) {
        try {
            const getCart = await cartModel.findById(id);
            return getCart;
        } catch (error) {
            return error;
        }
    }
 // const addToCart = await cartModel.findByIdAndUpdate( { '_id' : cid} , {$push: { productList:  {productId : pid , productName: getProd.name  , quantity: quantity }}}); // ok
    async addProductsToCart( cid , pid , quantity ){
        try {
            const getCart = await cartModel.findById( cid ); // Busco el Cart
            const getProd = await productsModel.findById( pid ); // Traigo Productos

            if(getCart) {
                const compare = getCart.productList.find( e => e.productId ===  pid); // checkeo si existe el prod. en el cart
                // console.log(compare);
                if(compare) {
                    // const addQuantity = await cartModel.findById( cid ).updateOne({ 'productId' : pid } , { $inc: {quantity : +quantity}});
                    const addQuantity = getCart.productList.map( e => {
                        if( e.productId == pid ) {
                            e.quantity += quantity
                        }
                        return e
                    })
                    return await cartModel.findByIdAndUpdate( cid, { productList : addQuantity}); // ok
                    // return 'existe'
                } else {
                    const addToCart = await cartModel.findByIdAndUpdate( { '_id' : cid} , {$push: { productList:  {productId : pid , productName: getProd.name  , quantity: quantity }}});
                    // return 'NO existe'
                    return addToCart;
                }

            }else{
                return 'Error: Cart no encontrado.'
            }

            
        } catch (error) {
            console.log( error );
        }
    }


    /* async addToCart( id ) {        
        try {
            const getProd = await productsModel.find({ '_id' : id }); // traigo elemento de "productos"

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
    } */
}