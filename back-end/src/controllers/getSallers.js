const GetSallersService = require("../services/getSallers");

class GetSallersController {
  static async get(_req, res) {
    const result = await GetSallersService.get();
    return res.status(200).json(result);
  }
}

module.exports = GetSallersController;
