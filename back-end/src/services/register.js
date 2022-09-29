const md5 = require('md5');
const models = require('../database/models');

const ErrorsCode = require('../errors/ErrorsCode');

class RegisterService {
  static async create({ name, email, password }) {
    const hashPass = md5(password);

    const aux = {
      name,
      email,
      password: hashPass,
      role: 'customer',
    };

    const existsEmail = await this.checkExists(email);
    if (existsEmail) {
      throw new ErrorsCode('EmailAlreadyExists', 'Email already Exists', 409);
    }

    const user = await models.User.create(aux, {
      raw: true,
    });

    return user;
  }
  
  static async checkExists(email) {
    const exists = await models.User.findOne({ where: { email } });
    if (!exists) {
      return false;
    }
    return true;
  }

  // static async getOne({ email }) {
  //   const user = await models.User.findOne({
  //     where: { email },
  //     raw: true,
  //   });

  //   if (!user) {
  //     throw new ErrorsCode('NotFound', 'Not found user', 404);
  //   }

  //   return user;
  // }
}

module.exports = RegisterService;
