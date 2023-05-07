// basicMongo.js = es una "clase" que continene las funcionalidades mas básicas, mas repetidas dentro de un CRUD.

export default class BasicMongo {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    try {
      const response = await this.model.create(obj);
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
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  // async updateOne(id, obj) {
  //   try {
  //     const response = await this.model.update(id, obj);
  //     return response;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  async deleteOne(id) {
    // console.log(`BASIC MONGO : deleteUser ${id}`);
    try {
      const response = await this.model.deleteOne({ _id: id });
      // console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }
}
