const { Router } = require('express');
const RegisterController = require('../controllers/register');

const register = Router();

register.route('/').post(RegisterController.create);

module.exports = register;