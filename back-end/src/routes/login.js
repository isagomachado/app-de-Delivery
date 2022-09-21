const { Router } = require('express');
const LoginController = require('../controllers/login');

const login = Router();

login.route('/')
  .post(LoginController.login);

module.exports = login
