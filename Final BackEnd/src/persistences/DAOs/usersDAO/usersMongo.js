// # DAO = Data Access Object
import { UsersModel } from './../../mongo/models/users.model.js';
import BasicMongo from './../basicMongo.js';
import bcrypt from 'bcrypt';
import { hashData, compareHashedData } from '../../../utils.js';

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
        const newUser = {
          ...obj,
          thumbnail: 'https://tenco.com.ar/img/iso1920x1080-bn.jpg',
          password: hashPassword,
        };
        await UsersModel.create(newUser);
        return newUser;
      }
      return null;
    } catch (error) {
      // return error;
      throw new Error(error);
    }
  }

  async login(obj) {
    // luego se pasará con Passport
    const { email, password } = obj;
    let user = await UsersModel.findOne({ email });

    if (user && user.length !== 0) {
      const checkPass = await compareHashedData(password, user.password);
      if (checkPass) {
        console.log('MNG',user)
        return user;
      }
    } else {
      return null;
    }
  }

  // async logout(session){
  //   session.destroy()
  // }

  async findAll() {
    try {
      let users = await UsersModel.find().lean();
      return users      
    } catch (error) {
      return error
    }
  }

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
