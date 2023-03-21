import { usersModel } from "../../models/users.models.js";
import { hashPassword, comparePassword } from "../../../utils.js";

export default class UsersManager {

  async createUser(user) {
    const { email, password } = user;
    try {
      // verifico si existe usuario:
      const existeUsuario = await usersModel.find({ email });
      // console.log('EXISTE', existeUsuario);
      if (existeUsuario.length === 0) {
        const hashNewPassword = await hashPassword(password); // hasheo el pass que envia el usuario
        //si no existe: lo creo
        const newUser = { ...user, password: hashNewPassword , rol: 'user'}; // x defecto son user
        await usersModel.create(newUser);
        return newUser;
      } else {
        //si existe: lo creo
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async loginUser(user) {
    const { email, password } = user;
    const usuario = await usersModel.findOne({ email }); // [usuario]

    if (usuario) {
      const isPassword = await comparePassword(password, usuario.password); //le paso el pass plano y el pass de la bbdd

      if (isPassword) {
        // console.log(usuario)
        return usuario;
      }
    } else {
      return null;
    }
  }
}
