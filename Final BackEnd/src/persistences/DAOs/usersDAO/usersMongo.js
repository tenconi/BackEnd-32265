// # DAO = Data Access Object
import { UsersModel } from './../../mongo/models/users.model.js';
import BasicMongo from './../basicMongo.js';

class UsersMongo extends BasicMongo {
  constructor(model) {
    super(model);
  }
}
export default new UsersMongo(UsersModel); //instancio y (le paso el modelo)

