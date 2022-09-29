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

  static async getAll(_req, res) {
    const orders = await SaleService.getAll();
    return res.status(200).json(orders);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const sale = await SaleService.getById(id);
    // const products = await Sale
    return res.status(200).json(sale);
  }

  static async updateSaleStatus(req, res) {
    const { status } = req.body;
    const { id } = req.params
    const result = await SaleService.updateSaleStatus(status, id);
    return res.status(200).json(result);
  }
}

module.exports = SaleController;