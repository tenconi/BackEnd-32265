//todas las funcionalidades de servicios
import {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
} from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
  const products = await getAllProducts();
};

export const getProductById = async (req, res) => {
  const id = req.query; // ¿?
  const products = await getProductById(id);
};

export const addProduct = async (req, res) => {
  const newProd = req.body;
  const products = await addProduct(newProd);
};

export const deleteProduct = async (req, res) => {
  const id = req.query; // ¿?
  const products = await deleteProduct(id);
};
