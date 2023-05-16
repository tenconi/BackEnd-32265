// SERVICE : recibe lo que especificamente envia el controlador (no el objeto req completo)
import UsersMongo from '../persistences/DAOs/usersDAO/usersMongo.js';
// import { hashData } from '../utils.js';

class UsersServices {
  constructor(dao) {
    this.dao = dao;
  }

  createUser = async (obj) => {
    const newUser = this.dao.create(obj); // levanto fx de "dao"
    return newUser;
  };

  logUser = async (obj) => {
    const logUser = this.dao.login(obj);
    return logUser;
  };

  logExit = async (session) => {
    const shutDown = this.dao.logout(session);
    return shutDown;
  };

  findUser = async (id) => {
    // console.log(`SERVICE : findOne`, id);
    const user = await this.dao.findOne(id); // levanto fx de "dao"
    return user;
  };

  findAllUsers = async () => {
    // console.log(`SERVICE : findAllUsers`);
    const user = await this.dao.findAll(); // levanto fx de "dao"
    // console.log(user); // *** OK
    return user;
  };

  edit = async (id, field, value) => {
    console.log(id, field, value);
    const user = await this.dao.updateOne(id, field, value);
    return user;
  };

  deleteUser = async (id) => {
    // console.log('SERVICE', id);
    const user = await this.dao.deleteOne(id); // levanto fx de "dao"
    return user;
  };
}

export default new UsersServices(UsersMongo); // le paso el dao
