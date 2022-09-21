const models = require('../database/models');
const md5 = require('md5');

const ErrorsCode = require('../errors/ErrorsCode');

class LoginService {
  static async login({ email, password }) {
    const hashPass = md5(password);

    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });

    if (!user || user.password !== hashPass) {
      throw new ErrorsCode('UnauthorizedError', 'Email or password invalid', 401);
    };

    return user;
  }
}

module.exports = LoginService