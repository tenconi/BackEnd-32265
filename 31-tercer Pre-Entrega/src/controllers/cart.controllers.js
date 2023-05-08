import {
  createCart,
  getAllCarts,
  getCartById,
  addProductsToCart,
} from '../services/carts.services.js';

export const createNewCart = async (req, res) => {
  const cart = await createCart();
};

export const getListCarts = async (req, res) => {
  const cart = await getAllCarts();
};

export const getCartId = async (req, res) => {
  const id = req.query;
  const cart = await getCartById(id);
};

export const productsToCart = async (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;
  console.log('ctrl', cid, pid, quantity)
  const cart = await addProductsToCart(cid, pid, quantity);
};
