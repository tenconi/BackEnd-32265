// los servicios se encargan de importar los daos
import usersDAO from '../persistence/DAOs/factory.js';

export const getAllUsers = async (req, res) => {
  const users = await usersDAO.getAllUsers(); // se llama igual en todos los DAOs
  return users;
};

export const createUser = async (objUser) => {
  const users = await usersDAO.createUser(objUser); // se llama igual en todos los DAOs
  return users;
};

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
