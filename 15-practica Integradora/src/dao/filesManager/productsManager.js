import { json } from 'express';
import fs from 'fs';
import { __dirname } from '../../utils.js';

const path = __dirname + '/Products.json'

export default class ProductManager {
    async getAllProducts(){        
        if (fs.existsSync(path)) {
            try {
                const readFile = await fs.promises.readFile( path , 'utf-8');
                return JSON.parse(readFile);
            } catch (error) {
                return error
            }
        } else {
            return [];            
        }
    }

    async addProduct(prod){
        const { name , description, code , price , status = true, stock , category , thumbnail } = prod;
        prod = { id: await this.#generateId(), name, description, code, price, status, category, stock, thumbnail };

        const productosListados = await this.getAllProducts();
        productosListados.push(prod);

        await fs.promises.writeFile(path, JSON.stringify( productosListados ));
    }

    async getProductById(id){
        const getProduct = await this.getAllProducts();
        const product = getProduct.find((x) => x.id === id);
        return product ;
    }

    async deleteProduct(id){
        const getProducts = await this.getAllProducts();
        const delProduct = getProducts.filter((x) => x.id !== id);
        const delSelect =  getProducts.find((x) => x.id === id);

        await fs.promises.writeFile(path, JSON.stringify( delProduct ));

        if (delSelect) {
            return `Ud. ha eliminado correctamente ${delSelect.name} con id ${delSelect.id} `;
        } else {
            return `El id ${id} no se encuentra listado.`    
        }

        // return `Ud. ha eliminado ${delSelect.name} con id ${delSelect.id} `;

    }

    updateProduct(id){

    }
    deleteFile(){

    }

    async #generateId() {
        let estado = await this.getAllProducts();
        let id = 1;
        let searchMaxId =  estado.map(element => {
          return element.id
        });
        let maxId = Math.max(...searchMaxId)
    
        if(maxId == 0 || maxId == null || maxId == -Infinity){
          return id = 1
        }else if(maxId){
          return id= maxId + 1
        }
      }

}