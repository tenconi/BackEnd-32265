// # DAO = Data Access Object
import { UsersModel } from './../../mongo/models/users.model.js';
import BasicMongo from './../basicMongo.js';
import bcrypt from 'bcrypt';
import { compareHashedData, hashData } from '../../../utils.js';

class UsersMongo extends BasicMongo {
  constructor(model) {
    super(model);
  }

  async create(obj) {
    const { email, password } = obj;
    try {
      const checkExistence = await UsersModel.find({ email });
      if (checkExistence.length === 0) {
        const hashPassword = await hashData(password);
        const newUser = { ...obj, password: hashPassword };
        await UsersModel.create(newUser);
        return newUser;
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  async login(obj) {
    // luego se pasará con Passport
    const { email, password } = obj;
    try {
      const user = await UsersModel.find({ email });
      if (user.length !== 0) {
        const checkPass = await compareHashedData(password, user.password);
        if (checkPass) {
          console.log('pass Aprobado', user);
          return user;
        }
      } else {
        return null;
      }
    } catch (error) {
      return error;
    }
  }

  async logout(session){
    session.destroy()
  }

  async findAll() {}

  async findOne(id) {}

  async updateOne(id, field, value) {
    try {
      if (field === 'name') {
        const editUser = UsersModel.updateOne(
          { _id: id },
          { $set: { name: value } }
        );
        return editUser;
      }

      if (field === 'surname') {
        const editUser = UsersModel.updateOne(
          { _id: id },
          { $set: { surname: value } }
        );
        return editUser;
      }
      // const response = await this.model.update(id, obj);
      // return editUser;
    } catch (error) {
      return error;
    }
  }
}
export default new UsersMongo(UsersModel); //instancio y (le paso el modelo)
