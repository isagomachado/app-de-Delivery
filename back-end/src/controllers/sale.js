const LoginService = require('../services/login');
const SaleService = require('../services/sale');
const SaleProductsService = require('../services/saleProducts');
// const Validate = require('../services/validations');

class SaleController {
  static async create(req, res) {
    const { objSale, cartIds } = req.body;
    // console.log(req.header);
    // await Validate.saleBody(req.body);
    const user = LoginService.validateToken(req.headers.authorization);
    // objSale.userId = user.payload.id;
    const sale = await SaleService.create({ ...objSale, userId: user.payload.id });
    Promise.all(
      cartIds.map(async (cart) => {
        const result = await SaleProductsService.create({
          saleId: sale.id,
          productId: cart.id,
          quantity: cart.qty,
        });
        return result;
      }),
    );
    return res.status(201).json({ id: sale.id, header: req.headers, user: cartIds });
  }
}

module.exports = SaleController;