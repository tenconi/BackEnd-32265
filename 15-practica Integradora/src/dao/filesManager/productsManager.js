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
    }

    async updateProduct(id, field, value){
        const getProduct = await this.getAllProducts();
        const prodToEdit = getProduct.find((x) => x.id === id);
        const prodRestantes = getProduct.filter((x) => x.id != id);

        prodToEdit[ field ] = value;
        let concatenado = prodRestantes.concat(prodToEdit);

        if( !id || !field || !value){
            return `Deben completarse todos los campos, por ej:  { "campo" : "valor_a_modificar" }`;
        } else {            
            await fs.promises.writeFile(path, JSON.stringify( concatenado ));
            return `Producto con id ${id} editado correctamente. Su nuevo ${field} es ${value}.`;
        } 
    }

    async deleteFile(){
        if(fs.existsSync(path)){
            try {
                await fs.promises.unlink(path);
                return 'El archivo ha sido eliminado satisfactoriamente. No hay vuelta atras.' ;
            } catch (error) {
                return error;
            }            
        }else{
            return 'No existe archivo para eliminar.';
        }
    }

    async #generateId() {
        let estado = await this.getAllProducts();
        let id = 1;
        let searchMaxId =  estado.map(element => {
          return element.id;
        });
        let maxId = Math.max(...searchMaxId);
    
        if(maxId == 0 || maxId == null || maxId == -Infinity){
          return id = 1;
        }else if(maxId){
          return id= maxId + 1;
        }
      }

}