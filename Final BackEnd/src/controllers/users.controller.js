// CONTROLLER : recibe el "req, res" , saca la info que necesite del body, y exporta.
import UsersServices from './../services/users.services.js';

class UsersController {
  createOne = async (req, res) => {
    const obj = req.body;
    // console.log(`CONTROLLER : ${obj}`);
    try {
      const newUser = await UsersServices.createUser(obj);
      res.json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
      res.json({ message: 'Error', error: error });
    }
  };

  findOne = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
      // console.log(`CONTROLLER : findOne `);
      const findUser = await UsersServices.findUser(id);
      res.json({ message: ' Usuario encontrado', user: findUser });
      // console.log(findUser);
    } catch (error) {
      // console.log(error);
      res.json({
        message: ' No se ha encontrado el usuario especificado',
        error: error,
      });
    }
  };

  allTheUsers = async (req, res) => {
    // console.log(`CONTROLLER : findAllUsers `);
    try {
      const findUsers = await UsersServices.findAllUsers();
      res.json({ message: 'Usuarios:', users: findUsers });
    } catch (error) {
      res.json({ message: error });
      // return error;
    }
  };

  editUser = async (req, res) => {
    const {id} = req.params
    const newData = req.body

    const field = Object.keys(newData).toString(); // lo paso a string xq me llega como array
    const value = Object.values(newData).toString(); // lo paso a string xq me llega como array

    console.log(`CONTROLLER : editUser `, id, field, value);
    try {
      const updateUser = await UsersServices.edit(id, field, value)
      res.json({ message: 'Usuario editado correctamente', user: updateUser });
    } catch (error) {
      res.json({ message: error });
    }
  }

  delUser = async (req, res) => {
    // console.log(`CONTROLLER : deleteUser `);
    const { id } = req.params;
    // console.log(`CONTROLL ${id}`);
    try {
      const deleteUser = await UsersServices.deleteUser(id);
      res.json({ message: 'Usuario Eliminado:', user: deleteUser });
      return deleteUser;
    } catch (error) {
      res.json({ message: error });
    }
  };

}

export default new UsersController();
