// los servicios se encargan de importar los daos
import usersDAO from '../persistence/DAOs/factory.js';


const UserDAO = new usersDAO()

export const getAllUsers = async (req, res) => {
  const users = await UserDAO.getAllUsers(); // se llama igual en todos los DAOs
  return users;
};

export const createUser = async (objUser) => {
  const users = await UserDAO.createUser(objUser); // se llama igual en todos los DAOs
  return users;
};

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
