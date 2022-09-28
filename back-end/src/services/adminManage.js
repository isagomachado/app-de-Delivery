const md5 = require('md5');
const models = require('../database/models');

const ErrorsCode = require('../errors/ErrorsCode');

class AdminManageService {
  static async create({ name, email, password, role }) {
    const hashPass = md5(password);
    const existsEmail = await this.checkExistsEmail(email);
    if (existsEmail) {
      throw new ErrorsCode('EmailAlreadyExists', 'Email already Exists', 409);
    }
    const existsName = await this.checkExistsName(name);
    if (existsName) {
      throw new ErrorsCode('NameAlreadyExists', 'Name already Exists', 409);
    }
    const user = await models.User.create({ name, email, password: hashPass, role }, {
      raw: true,
    });
    return user;
  }
  
  static async checkExistsEmail(email) {
    const existsEmail = await models.User.findOne({ where: { email } });

    if (!existsEmail) {
      return false;
    }
    return true;
  }

  static async checkExistsName(name) {
    const existsName = await models.User.findOne({ where: { name } });

    if (!existsName) {
      return false;
    }
    return true;
  }
}

module.exports = AdminManageService;
