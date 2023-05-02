// es un clase que recibe un objeto y deuelve un objeto
export default class UsersDTO {
  cosntructor(user) {
    this.full_name = `${user.first_name}, ${user.last_name}`;
    this.email = user.email;
    this.password = user.password;
    this.rol = user.rol
  }
}

// Proceso info y Devuelvo los datos unificados