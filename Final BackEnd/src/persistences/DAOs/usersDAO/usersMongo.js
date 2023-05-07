// # DAO = Data Access Object
import { UsersModel } from './../../mongo/models/users.model.js';
import BasicMongo from './../basicMongo.js';

class UsersMongo extends BasicMongo {
  constructor(model) {
    super(model);
  }

  async updateOne(id, field, value) {
      try {
        if(field === "name"){
          const editUser = UsersModel.updateOne( { '_id' : id }, {$set:{ "name" : value } }); 
          return editUser
      }

      if(field === "surname"){
          const editUser = UsersModel.updateOne( { '_id' : id }, {$set:{ "surname" : value } }); 
          return editUser
      }


        // const response = await this.model.update(id, obj);
        // return editUser;
      } catch (error) {
        return error;
      }
    }
}
export default new UsersMongo(UsersModel); //instancio y (le paso el modelo)

