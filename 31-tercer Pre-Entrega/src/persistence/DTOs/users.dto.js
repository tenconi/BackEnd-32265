// es un clase que recibe un objeto y deuelve un objeto

export default class UsersDTO {
  cosntructor(user) {
    this.full_name = `${user.firstName}, ${user.lastName}`;
    this.first_name = user.firstName;
    this.last_name = user.lastName;
    this.email = user.email;
    this.password = user.password;
  }
}

// Proceso info y Devuelvo los datos unificados