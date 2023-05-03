import { userModel } from '../../mongo/models/user.model.js';
import UsersDTO from '../../DTOs/users.dto.js';
import UsersRespDTO from '../../DTOs/usersResp.dto.js';

export default class UserMongoManger {
  async createUser(objUser) {
    try {
      const newUser = await userModel.create(objUser);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUsers() {
    try {
      const users = await usersModel.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }
}
