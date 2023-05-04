// SERVICE : recibe lo que especificamente envia el controlador (no el objeto req completo)
import UsersMongo from '../persistences/DAOs/usersDAO/usersMongo.js';
import { hashData } from '../utils.js';

class UsersServices {
  constructor(dao) {
    this.dao = dao;
  }

  createUser = async (obj) => {
    const hashPassword = hashData(obj.password);
    const newObj = { ...obj, hashPassword };
    const newUser = this.dao.create(newObj); // levanto fx de "dao"
    return newUser;
  };

  findUser = async (id) => {
    const user = await this.dao.findOne(id); // levanto fx de "dao"
    return user;
  };

  findAllUsers = async () => {
    const user = await this.dao.findOne(); // levanto fx de "dao"
    return user;
  };

  deleteUser = async (id) => {
    const user = await this.dao.deleteOne(id); // levanto fx de "dao"
    return user;
  };
}

export default new UsersServices(UsersMongo); // le paso el dao
