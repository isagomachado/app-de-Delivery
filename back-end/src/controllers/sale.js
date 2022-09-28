const LoginService = require('../services/login');
const SaleService = require('../services/sale');
const SaleProductsService = require('../services/saleProducts');

class SaleController {
  static async create(req, res) {
    const { objSale, cartIds } = req.body;
    const user = LoginService.validateToken(req.headers.authorization);
    const sale = await SaleService.create({ ...objSale, userId: user.payload.userId });
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
    return res.status(201).json({ id: sale.id });
  }
}

module.exports = SaleController;