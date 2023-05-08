// los servicios se encargan de importar los daos
import cartsDAO from '../persistence/DAOs/factory.js';
const CartDAOS = cartsDAO.cartsDAO

export const createCart = async () => {
  const cart = await CartDAOS.create(); // se llama igual en todos los DAOs
  return cart;
};

export const getAllCarts = async () => {
  const cart = await CartDAOS.getAll(); // se llama igual en todos los DAOs
  return cart;
};

export const getCartById = async (id) => {
  const cart = await CartDAOS.getCart(id); // se llama igual en todos los DAOs
  return cart;
};

export const addProductsToCart = async (cid, pid, quantity) => {
  const cart = await CartDAOS.addToCart(cid, pid, quantity); // se llama igual en todos los DAOs
  return cart;
};

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
