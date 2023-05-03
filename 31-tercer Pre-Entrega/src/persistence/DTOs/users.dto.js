// es un clase que recibe un objeto y deuelve un objeto
export default class UsersDTO {
  cosntructor(user) {
    this.full_name = `${user.first_name}, ${user.last_name}`;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
  }
}

// Proceso info y Devuelvo los datos unificados