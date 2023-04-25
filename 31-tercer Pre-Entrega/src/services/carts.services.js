// los servicios se encargan de importar los daos
import cartsDAOs from '../persistence/DAOs/factory.js';

export const createCart = async () => {
  const cart = await cartsDAOs.createCart(); // se llama igual en todos los DAOs
  return cart;
};

export const getAllCarts = async () => {
  const cart = await cartsDAOs.getAllCarts(); // se llama igual en todos los DAOs
  return cart;
};

export const getCartById = async (id) => {
  const cart = await cartsDAOs.getCartById(id); // se llama igual en todos los DAOs
  return cart;
};

export const addProductsToCart = async (cid, pid, quantity) => {
  const cart = await cartsDAOs.addProductsToCart(cid, pid, quantity); // se llama igual en todos los DAOs
  return cart;
};

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
