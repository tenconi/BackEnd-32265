import { cartModel } from '../../mongo/models/cart.model.js';
import { usersModel } from '../../mongo/models/user.model.js';
import { productModel } from '../../mongo/models/product.models.js';

export default class CartMongoManager {
  async create() {
    try {
      const createCart = await cartModel.create({
        cart: [],
      });
      return createCart;
    } catch (error) {
      return error;
    }
  }

  // listo todo los carros creados solo para ver
  async getAll() {
    try {
      const allCarts = await cartModel.find().lean();
      console.log(allCarts);
      return allCarts;
    } catch (error) {
      return error;
    }
  }

  async getCart(id) {
    try {
      const getCart = await cartModel.findById(id);
      // console.log(getCart.productList);
      return getCart.productList;
    } catch (error) {
      return error;
    }
  }

  async addToCart(cid, pid, quantity) {
    // console.log('manager', cid, pid, quantity)
    console.log('3 - MANAGER: ', 'cid: ',cid, 'pid:', pid);

    try {
      //chequeo si tiene cart
      const checkCart = req.user.cart

      if (!checkCart) {
        await this.create(); // si No hay lo creo
      } else {
        // si hay lo traigo
        const getCart = await this.getCart(checkCart._id);

        if (getCart) {
          // chequeo si existe Prod    
          const compare = getCart.productList.find((e) => e.productId == pid);
          if (compare) {
            // si existe edito las cantidades
            const addQuantity = getCart.productList.map((element) => {
              if (element.productId == pid) {
                element.quantity += quantity;
              }
              return element;
            });
            return await cartModel.findByIdAndUpdate(cid, {
              productList: addQuantity,
            });
          }else{
            // si No existe prod
            const addToCart = await cartModel.findByIdAndUpdate(
              { _id: cid },
              {
                $push: {
                  productList: {
                    productId: pid,
                    productName: getProd.name,
                    quantity: quantity,
                  },
                },
              }
            );
  
            return addToCart;
          }
        } else {
      return error;
        } 
      }

    } catch (error) {
      return error
    }
  }
}




    /* try {
      const getCart = await cartModel.findById(cid); // Busco el Cart
      const getProd = await productModel.findById(pid); // Traigo Productos

      if (getCart) {
        const compare = getCart.productList.find((e) => e.productId == pid);
        if (compare) {
          // si existe edito las cantidades
          const addQuantity = getCart.productList.map((el) => {
            if (el.productId == pid) {
              el.quantity += quantity;
            }
            return el;
          });
          return await cartModel.findByIdAndUpdate(cid, {
            productList: addQuantity,
          });
        } else {
          // si No existe hago un push al array
          const addToCart = await cartModel.findByIdAndUpdate(
            { _id: cid },
            {
              $push: {
                productList: {
                  productId: pid,
                  productName: getProd.name,
                  quantity: quantity,
                },
              },
            }
          );

          return addToCart;
        }
      }
    } catch (error) {
      console.log(error);
    }
  } */
  



// export default class CartMongoManager {
//   async create() {
//     const newCart = await cartModel.create();
//     return newCart;
//   }

//   async getAll() {
//     try {
//       const carts = await cartModel.find({}).lean();
//       return carts;
//     } catch (error) {
//       return error;
//     }
//   }

//   async getCart(cid) {
//     try {
//       const getCart = await cartModel.findById(cid);//.lean();
//       // console.log(getCart.productList);
//       // const listaProducts = getCart.productList;
//       return getCart;
//     } catch (error) {
//       return error;
//     }
//   }

//   async create() {
//     try {
//       const createCart = await cartModel.create({});
//       return createCart;
//     } catch (error) {
//       return error;
//     }
//   }

//   async toCart(cid, pid) {
//     try {
//       const cart = await cartModel.findById(cid);
//       console.log('primer log', cart);
//       if (!cart) {
//         return cart;
//       } else {
//         if (cart.products.length) {
//           const productIndex = cart.products.findIndex(
//             (e) => e.productId == pid
//           );
//           console.log(productIndex);

//           if (productIndex !== -1) {
//             let updateQ = await cartModel.updateOne(
//               { _id: cid, 'products.productId': pid },
//               { $inc: { 'products.$.quantity': 1 } }
//             );
//             return updateQ;
//           } else {
//             const pushProduct = cartModel.updateOne(
//               { _id: cid },
//               {
//                 $push: {
//                   products: {
//                     productId: pid,
//                     quantity: 1,
//                   },
//                 },
//               }
//             );
//             return pushProduct;
//           }
//         } else {
//           {
//             const pushProduct = cartModel.updateOne(
//               { _id: cid },
//               {
//                 $push: {
//                   products: {
//                     productId: pid,
//                     quantity: 1,
//                   },
//                 },
//               }
//             );

//             return pushProduct;
//           }
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }


//   ///////////////////////////////////////////

//   async updateQuantityByQuery(cid, pid, quantity) {
//     try {
//       const filter = { _id: cid, 'products.productId': pid };
//       const update = { $set: { 'products.$.quantity': quantity } };
//       const updatedCartProduct = await cartModel.findOneAndUpdate(
//         filter,
//         update,
//         { new: true }
//       );
//       return updatedCartProduct;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async updateCartProductsByArray(cid, productsArray) {
//     try {
//       const updateCartProducts = await cartModel.findOneAndReplace(
//         { _id: cid },
//         { products: productsArray },
//         { new: true }
//       );
//       return updateCartProducts;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async deleteAllCarts() {
//     const deletedCarts = await cartModel.deleteMany();
//     return deletedCarts;
//   }

//   async deleteCartById(cid) {
//     try {
//       const filter = { _id: cid };
//       const update = { products: [] };
//       const deletedCart = await cartModel.findOneAndUpdate(filter, update, {
//         new: true,
//       });
//       return deletedCart;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async deleteProductCart(cid, pid) {
//     try {
//       const idCart = await cartModel.findById(cid);

//       if (idCart !== undefined) {
//         //triple comparacion no funciona, tal vez por el params ser string y otro un objectID
//         const productToDeleteIndex = idCart.products.findIndex(
//           (e) => e.productId == pid
//         );

//         if (productToDeleteIndex !== -1) {
//           idCart.products.splice(productToDeleteIndex, 1);
//           const updatedCart = await idCart.save();
//           return updatedCart;
//         } else {
//           return undefined;
//         }
//       } else {
//         return idCart;
//       }
//     } catch (error) {
//       console.log('Producto de Carrito no encontrado', error);
//     }
//   }
// }

