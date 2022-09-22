const typeErrors = require('../errors/typeErrors');

/**
 * @param {ErrorsCode} err
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */

const erroHandler = (err, _req, res, _next) => {
  const { name, message, code } = err;

  const status = typeErrors[name];
  
  if (!status) return res.status(500).json({ message });

  res.status(code).json({ message });
};

module.exports = erroHandler;