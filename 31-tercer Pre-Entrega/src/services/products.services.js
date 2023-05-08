// los servicios se encargan de importar los daos
import productsDAO from '../persistence/DAOs/factory.js';
// console.log('productsDAO', productsDAO.productsDAO);
const ProdDAOS = productsDAO.productsDAO;
// console.log('nuevop', prodDAO);

// export const getAllProducts = async (limit, page) => {
//   const prods = await productsDAO.getAllProducts(limit, page);
//   return prods;
// };

// export const getProductById = async (id) => {
//   const prods = await productsDAO.getProductById(id);
//   return prods;
// };

// export const addProduct = async (prod) => {
//   const prods = await productsDAO.addProduct(prod);
//   return prods;
// };

// export const deleteProduct = async (id) => {
//   const prods = await productsDAO.deleteProduct(id);
//   return prods;
// };

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY

class ProductsServices {
  getAllProducts = async (limit, page) => {
    const prods = await ProdDAOS.allProducts(limit, page);
    // console.log('service prods',prods);
    return prods;
  };

  getProductById = async (id) => {
    const prods = await ProdDAOS.productById(id);
    return prods;
  };

  addProduct = async (prod) => {
    const prods = await ProdDAOS.add(prod);
    return prods;
  };

  deleteProduct = async (id) => {
    const prods = await ProdDAOS.deleteProduct(id);
    return prods;
  };
}

export default new ProductsServices(productsDAO);
