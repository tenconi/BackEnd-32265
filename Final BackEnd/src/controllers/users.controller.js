// CONTROLLER : recibe el "req, res" , saca la info que necesite del body, y exporta.
import UsersServices from './../services/users.services.js';

class UsersController {
  createOne = async (req, res) => {
    const obj = req.body;
    try {
      const newUser = await UsersServices.createUser(obj);
      res.json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
      res.json({ message: 'Error', error });
    }
  };

  findOne = async (req, res) => {
    const { id } = req.params;
    try {
      const findUser = await UsersServices.findUser({ id });
      res.json({ message: ' Usuario encontrado' });
    } catch (error) {
      res.json({
        message: ' No se ha encontrado el usuario especificado',
        error: error,
      });
    }
  };
}

export default new UsersController();
