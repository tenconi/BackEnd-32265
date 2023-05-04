/*  
basicMongo.js = es una "clase" que continene las funcionalidades mas básicas, mas repetidas dentro de un CRUD.
 */

export default class BasicMongo {
  constructor(model) {
    this.model = model;
  }
  
  async create(obj) {
    try {
      const response = await this.model.create();
      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const response = await this.model.find();
      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id) {
    try {
      const response = await this.model.find(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateOne(id, obj) {
    try {
      const response = await this.model.update(id, obj);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteOne(id) {
    try {
      const response = await this.model.deleteOne(id);
      return response;
    } catch (error) {
      return error;
    }
  }
}
