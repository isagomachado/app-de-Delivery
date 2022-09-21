const models = require('../database/models')

class LoginService {
  static async getAll() {
    const users = await models.User.findAll();
    return users
  }
}

module.exports = LoginService