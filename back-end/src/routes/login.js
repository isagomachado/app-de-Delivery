const { Router } = require('express');
const LoginController = require('../controllers/login');

const route = Router();

route.get('/', LoginController.getAll);

module.exports = route
