// los servicios se encargan de importar los daos
import productsDAO from '../persistence/DAOs/factory.js';

export const getAllProducts = async (limit, page) => {
  const prods = await productsDAO.getAllProducts(limit, page);
  return prods;
};

export const getProductById = async (id) => {
  const prods = await productsDAO.getProductById(id);
  return prods;
};

export const addProduct = async (prod) => {
  const prods = await productsDAO.addProduct(prod);
  return prods;
};

export const deleteProduct = async (id) => {
  const prods = await productsDAO.deleteProduct(prod);
  return prods;
};

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
