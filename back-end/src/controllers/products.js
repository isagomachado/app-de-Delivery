const ProductsService = require('../services/products');

class ProductsController {
  static async getAll(_req, res) {
    const products = await ProductsService.getAll();
    return res.status(200).json(products);
  }
}

module.exports = ProductsController;