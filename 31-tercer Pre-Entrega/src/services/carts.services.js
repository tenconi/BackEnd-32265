// los servicios se encargan de importar los daos
import cartsDAO from '../persistence/DAOs/factory.js';
const CartDAOS = cartsDAO.cartsDAO;

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
class CartsService {
  createCart = async () => {
    const cart = await CartDAOS.create(); // se llama igual en todos los DAOs
    return cart;
  };

  getAllCarts = async () => {
    const cart = await CartDAOS.getAll(); // se llama igual en todos los DAOs
    return cart;
  };

  getCartById = async (cid) => {
    const cart = await CartDAOS.getCart(cid); // se llama igual en todos los DAOs
    return cart;
  };

  addProductsToCart = async (cid, pid, quantity) => {
    const cart = await CartDAOS.toCart(cid, pid, quantity); // se llama igual en todos los DAOs
    return cart;
  };
}

export default new CartsService(CartDAOS);
