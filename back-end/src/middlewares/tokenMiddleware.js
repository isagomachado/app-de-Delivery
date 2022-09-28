const LoginService = require('../services/login');
const ErrorsCode = require('../errors/ErrorsCode');

/** @type {import('express').RequestHandler} */

const tokenMiddleware = async (req, _res, next) => {
  const auth = req.headers.authorization;
  if (!auth) throw new ErrorsCode('NotFound', 'Token not found', 404);

  const token = auth.includes('Bearer') ? auth.split(' ')[1] : auth;
  const data = await LoginService.validateToken(token);
  req.user = data;

  next();
};

module.exports = tokenMiddleware;