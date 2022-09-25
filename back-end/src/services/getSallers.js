const models = require('../database/models');

class GetSallersService {
  static async get() {
    const result = await models.User.findAll({
      where: { role: "seller" }
    });
    return result;
  }
}

module.exports = GetSallersService;