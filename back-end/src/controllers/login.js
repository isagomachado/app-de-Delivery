const LoginService = require('../services/login');

class LoginController {
  static async getAll(_req, res) {
    const users = await LoginService.getAll()
    return res.status(200).json({ users });
  }
};

module.exports = LoginController;