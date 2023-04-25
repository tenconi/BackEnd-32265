import {
  createCart,
  getAllCarts,
  getCartById,
  addProductsToCart,
} from '../services/carts.services.js';

export const createCart = async (req, res) => {
  const cart = await createCart();
};

export const getAllCarts = async (req, res) => {
  const cart = await getAllCarts();
};

export const getCartById = async (req, res) => {
  const id = req.query;
  const cart = await getCartById(id);
};

export const addProductsToCart = async (req, res) => {
  const cart = await addProductsToCart(cid, pid, quantity);
};
