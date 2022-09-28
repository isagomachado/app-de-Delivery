const AdminManageService = require('../services/adminManage');
const Validate = require('../services/validations');
const ErrorsCode = require('../errors/ErrorsCode');

class AdminManageController {
  static async create(req, res) {
    if (req.user.payload.role !== 'administrator') {
      throw new ErrorsCode('UnauthorizedError', 'Unauthorized', 401);
    }
    await Validate.adminRegisterBody(req.body);
    const user = await AdminManageService.create(req.body);
    const responseUser = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
    return res.status(201).json(responseUser);
  }
}

module.exports = AdminManageController;