const { Router } = require('express');
const GetSallersController = require('../controllers/getSallers');

const getSallers = Router();

getSallers.route('/').get(GetSallersController.get);

module.exports =  getSallers;
