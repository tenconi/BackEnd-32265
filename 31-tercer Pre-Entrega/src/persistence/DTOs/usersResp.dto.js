export default class UsersRespDTO {
    constructor(user) {
      this.fullName = user.full_name,
      this.userEmail = user.email
    }
  }
  