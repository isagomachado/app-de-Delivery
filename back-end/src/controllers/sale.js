const LoginService = require('../services/login');
const SaleService = require('../services/sale');
// const SaleProductsService = require('../services/saleProducts');
// const Validate = require('../services/validations');

class SaleController {
  static async create(req, res) {
    const { objSale } = req.body;
    // console.log(req.header);
    // await Validate.saleBody(req.body);
    const user = LoginService.validateToken(req.headers.authorization);
    // objSale.userId = user.payload.id;
    const sale = await SaleService.create({ ...objSale, userId: user.payload.id });
    // await SaleProductsService.create(products);
    return res.status(201).json({ id: sale.id, header: req.headers, user });
  }
}

module.exports = SaleController;