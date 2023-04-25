//todas las funcionalidades de servicios
import { getAllUsers, createUser } from '../services/users.services.js';

export const getAllUsers = async (req, res) => {
  const users = await getAll();
};

export const createUser = async (req, res) => {
  const usersObj = req.body;
  const newUser = await createUser(usersObj);
};
