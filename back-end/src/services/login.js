const jwt = require('jsonwebtoken');
const fs = require('fs')
const md5 = require('md5');
const models = require('../database/models');

const ErrorsCode = require('../errors/ErrorsCode');

const SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8'});

class LoginService {
  static async login({ email, password }) {
    const hashPass = md5(password);

    const user = await models.User.findOne({
      where: { email },
      raw: true,
    });

    if (!user || user.password !== hashPass) {
      throw new ErrorsCode('UnauthorizedError', 'Email or password invalid', 404);
    }

    const { password: pass, id: idUser, ...data } = user;
    const token = LoginService.createToken(data);

    return { ...data, token };
  }

  static createToken(payload) {
    const config = {
      expiresIn: '2d',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign(payload, SECRET, config);
    return token;
  }
  
  static validateToken(token) {
    try {
      const data = jwt.verify(token, SECRET, { complete: true });
      return data;
    } catch (error) {
      throw new ErrorsCode('UnauthorizedError', 'Token must be a valid token', 404);
    }
  }
}

module.exports = LoginService;