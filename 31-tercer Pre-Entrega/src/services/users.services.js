// SERVICE : levanta DAOS / PERSISTENCIAS
import usersDAO from '../persistence/DAOs/factory.js';
const UsersDAOS = usersDAO.usersDAO

// **** Para EVITAR TOCAR  esta capa de servicios me voy a estar apoyando en un patron de diseño que se llama FACTORY
class UsersServices {
  allUsers = async () => {
    try {
      const users = await UsersDAOS.getAllUsers(); // se llama igual en todos los DAOs
      return users;
    } catch (error) {
      return error;
    }
  };

  createUser = async (objUser) => {
    try {
      const users = await UsersDAOS(objUser); // se llama igual en todos los DAOs
      return users;
    } catch (error) {
      return error;
    }
  };
}

export default new UsersServices(UsersDAOS);
