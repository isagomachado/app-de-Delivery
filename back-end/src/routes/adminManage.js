const { Router } = require('express');
const AdminManageController = require('../controllers/adminManage');
const tokenMiddleware = require('../middlewares/tokenMiddleware')


const adminManage = Router();

adminManage.route('/').post(tokenMiddleware, AdminManageController.create);

module.exports = adminManage;