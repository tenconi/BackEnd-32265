import CartsService from '../services/carts.services.js';
// import { usersModel } from '../persistence/mongo/models/user.model.js'; // completar con services
// import usersServices from '../services/users.services.js';

class CartsControlls {

  newCart = async (req, res) => {
    try {
      const newCart = await CartsService.createCart();
      res.status(200).render('cart', { newCart });
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  };

  getAll = async (req, res) => {
    try {
      const carts = await CartsService.getAllCarts();
      if (carts) {
        res.status(200).render('cart', { cartProducts });
      } else {
        res.status(404).json({ message: 'No existe Cart' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  };

  getCart = async (req, res) => {
    const { cid } = req.params;

    try {
      const cart = await CartsService.getCartById(cid); //.populate('products');

      if (cart) {
        const cartProducts = cart.productList;
        res.status(200).render('cart', { cartProducts });
      } else {
        res.status(404).json({ message: 'No existe Cart' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  };

  toCart = async (req, res) => {
    
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    console.log('1 - CONTROL: ', 'cid: ',cid, 'pid:', pid);

    try {
      const cart =  await CartsService.addProductsToCart(cid, pid, quantity);
      if (cart) {
        res.status(200).json({ message: 'agReGAdO' });
      } else {
        res.status(404).json({ message: 'No se pudo agregar al carrto' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
    

    /* try {
      await usersServices.addProductsToCart(cid, pid, quantity)
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    } */

  };
}

export default new CartsControlls();

// otro User

// import {
//   createCart,
//   getAllCarts,
//   getCartById,
//   addProductsToCart,
// } from '../services/carts.services.js';




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
