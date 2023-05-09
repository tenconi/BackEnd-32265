// import {
//   createCart,
//   getAllCarts,
//   getCartById,
//   addProductsToCart,
// } from '../services/carts.services.js';

// export const createNewCart = async (req, res) => {
//   const cart = await createCart();
// };

// export const getListCarts = async (req, res) => {
//   const cart = await getAllCarts();
// };

// export const getCartId = async (req, res) => {
//   const { cid } = req.params;
//   // const id = req.query;
//   const cart = await getCartById(cid);
// };

// export const productsToCart = async (req, res) => {
//   const { cid, pid } = req.params;
//   const { quantity } = req.body;
//   console.log('ctrl', cid, pid, quantity)
//   const cart = await addProductsToCart(cid, pid, quantity);
// };

//todos los carritos

// router.get("/", async (req, res) => {
//   const carts = await cartManager.getCarts();
//   res.json(carts)
// })

//carrito por ID pasado por params

// router.get('/:cid', async (req, res) => {
//   try {
//     const { cid } = req.params;
//     const cart = await cartManager.getCartbyId(cid);
//     if (cart) {
//       const cartProducts = cart[0].products;
//       res.render('cart', { cartProducts });
//     } else {
//       res.json({ mensage: 'Carrito no encontrado' });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post('/', cartVerification, async (req, res) => {
//   const cartId = req.session.userInfo.associatedCart._id;
//   res.status(200).json({ cartId });
// });

// router.post('/:cid/product/:pid', async (req, res) => {
//   try {
//     const { cid, pid } = req.params;
//     const respuesta = await cartManager.addToCart(cid, pid);
//     if (!respuesta) {
//       res.json({ mensage: 'Carrito no encontrado' });
//     } else {
//       res.json(respuesta);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.put('/:cid', async (req, res) => {
//   try {
//     const { cid } = req.params;
//     const { products } = req.body;
//     const productsUpdated = await cartManager.updateCartProductsByArray(
//       cid,
//       products
//     );
//     if (productsUpdated) {
//       res.json(productsUpdated);
//     } else {
//       res.json({ mensaje: 'carrito no encontrado para actualizar' });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.put('/:cid/products/:pid', async (req, res) => {
//   const { quantity } = req.body;
//   const { cid, pid } = req.params;
//   const updatedProduct = await cartManager.updateQuantityByQuery(
//     cid,
//     pid,
//     quantity
//   );
//   res.json(updatedProduct);
// });

import cartsServices from '../services/carts.services.js';

class CartsControlls {
  newCart = async (req, res) => {
    try {
      const newCart = cartsServices.createCart();
      res.render('cart', { newCart });
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };

  getAll = async (req, res) => {
    try {
      const carts = cartsServices.getAllCarts();
      if (carts) {
        res.render('cart', { cartProducts });
      } else {
        res.json({ message: 'No existe Cart' });
      }
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };

  getCart = async (req, res) => {
    const { cid } = req.params;
    try {
      const cart = cartsServices.getCartById(cid);

      if (cart) {
        // const cartProducts = cart[0].products;
        res.render('cart', { cartProducts });
      } else {
        res.json({ message: 'No existe Cart' });
      }
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };

  toCart = async (req, res) => {
    console.log(req.user);
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    console.log('CTRL', cid, pid, quantity);

    try {
      const purch = await cartManager.addProductsToCart( cid, pid, parseInt(quantity) );
      if (!purch) {
        res.json({ mensage: "Carrito no encontrado" })
    }
    else {
        res.json(purch)
    }
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };
}

export default new CartsControlls();
