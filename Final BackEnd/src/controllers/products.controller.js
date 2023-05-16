// CONTROLLER : recibe el "req, res" , saca la info que necesite del body, y exporta.
import ProductsServices from '../services/products.services.js';

class ProductsControllers {
  allProducts = async (req, res) => {
    try {
      const products = await ProductsServices.viewAll();
      res.status(201).render('products',  {products} );
      //   res.status(201).redirect('/products');
    } catch (error) {
      res.status(500).json({ message: 'Error', error: error });
    }
  };

  addProduct = async (req, res) => {
    const obj = req.body;
    try {
      await ProductsServices.createProduct(obj);
      res.status(201).redirect('/products');
    } catch (error) {
      res.status(500).json({ message: 'Error', error: error });
    }
  };
}

export default new ProductsControllers();
