const LoginService = require('../services/login');
const Validate = require('../services/validations');

class LoginController {
  static async login(req, res) {
    await Validate.loginBody(req.body);
    const data = await LoginService.login(req.body);
    return res.status(200).json(data);
  }
}

module.exports = LoginController;