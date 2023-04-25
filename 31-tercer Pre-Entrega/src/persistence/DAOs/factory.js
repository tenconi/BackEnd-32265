// lo que recupere del config es el DAO que va a estar importando
import config from '../../config.js';

import ProductsFileManager from './productsDAOs/productsFile.js';
import ProductsMongoManager from './productsDAOs/productsMongo.js';

import CartFileManager from './cartsDAOs/cartFile.js';
import CartMongoManger from './cartsDAOs/cartMongo.js';

import UserFileManager from './usersDAOs/usersFile.js';
import UserMongoManger from './usersDAOs/usersMongo.js';

let usersDao;
let productsDAO;
let cartsDAOs;
switch (config.Persistencia) {
  case 'MONGO':
    await import('./../mongo/configDB.js'); // conecto BD
    usersDao = new UserMongoManger();
    productsDAO = new ProductsMongoManager();
    cartsDAOs = new CartMongoManger();
    break;
  case 'FILE':
    usersDao = new UserFileManager();
    productsDAO = new ProductsFileManager();
    cartsDAOs = new CartFileManager();
    break;
}

export default usersDao; productsDAO; cartsDAOs; // ¿?¿?