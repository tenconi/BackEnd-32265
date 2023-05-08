// SERVICE : levanta DAOS / PERSISTENCIAS
import usersDAO from '../persistence/DAOs/factory.js';

// console.log(' SERVICIO ')
// const UserDAO = new usersDAO()

// export const getAllUsers = async () => {
//   const users = await UserDAO.getAllUsers(); // se llama igual en todos los DAOs
//   return users;
// };

// export const createUser = async (objUser) => {
//   const users = await UserDAO.createUser(objUser); // se llama igual en todos los DAOs
//   return users;
// };

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
class UsersServices {
  allUsers = async () => {
    try {
      const users = await usersDAO.getAllUsers(); // se llama igual en todos los DAOs
      return users;
    } catch (error) {
      return error;
    }
  };

  createUser = async (objUser) => {
    try {
      const users = await usersDAO.createUser(objUser); // se llama igual en todos los DAOs
      return users;
    } catch (error) {
      return error;
    }
  };
}

export default new UsersServices(usersDAO);
