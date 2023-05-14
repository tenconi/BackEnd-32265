import ProductsServices from '../services/products.services.js';

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
    const { id} = req.params;
    
    try {
      const singleProduct = await ProductsServices.getProductById(id);
      
      res.status(200).render('products', {singleProduct})
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  };

  addNewProduct = async (req, res) => {
    const newProd = req.body;
    try {
      await ProductsServices.addProduct(newProd);
      res.status(200).redirect('/products/all')
      // return products
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  };

  deleteProduct = async (req, res) => {
    const id = req.query;
    try {
      const products = await ProductsServices.deleteProduct(id);
      return products
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  };
}
export default new ProductsControlls();
