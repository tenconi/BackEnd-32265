import { userModel } from '../../mongo/models/user.model.js';
// import UsersDTO from '../../DTOs/users.dto.js';
// import UsersRespDTO from '../../DTOs/usersResp.dto.js';

export default class UserMongoManger {
  async getAllUsers() {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(objUser) {
    try {
      // const userDTO = new UsersDTO(objUser); // => le paso el obj al DTO
      // const newUser = await userModel.create(userDTO);
      const newUser = await userModel.create(objUser);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }
}
