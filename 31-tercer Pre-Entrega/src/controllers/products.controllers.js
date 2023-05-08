//todas las funcionalidades de servicios
// import {
//   getAllProducts,
//   getProductById,
//   addProduct,
//   deleteProduct,
// } from '../services/products.services.js';

import ProductsServices from '../services/products.services.js';

// export const getAllProducts = async (req, res) => {
//   const products = await getAllProducts();
// };

// export const getProductById = async (req, res) => {
//   const id = req.query; // ¿?
//   const products = await getProductById(id);
// };

// export const addProduct = async (req, res) => {
//   const newProd = req.body;
//   const products = await addProduct(newProd);
// };

// export const deleteProduct = async (req, res) => {
//   const id = req.query; // ¿?
//   const products = await deleteProduct(id);
// };

class ProductsControlls {
  getAllProducts = async (req, res) => {
    const { limit = 10, page = 1 } = req.query;
    try {
      const products = await ProductsServices.getAllProducts(limit, page);
      res.render('products', {products})
      return products
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };

  productById = async (req, res) => {
    const {id} = req.params;
    try {
      const singleProduct = await ProductsServices.getProductById(id);      
      res.render('products', {singleProduct})
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };

  addNewProduct = async (req, res) => {
    const newProd = req.body;
    try {
      await ProductsServices.addProduct(newProd);
      res.redirect('/products/all')
      // return products
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };

  deleteProduct = async (req, res) => {
    const id = req.query;
    try {
      const products = await ProductsServices.deleteProduct(id);
      return products
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };
}
export default new ProductsControlls();
