const RegisterService = require('../services/register');
const Validate = require('../services/validations');

class RegisterController {
  static async create(req, res) {
    await Validate.registerBody(req.body);
    const user = await RegisterService.create(req.body);
    const responseUser = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
    return res.status(201).json(responseUser);
  }
}

module.exports = RegisterController;