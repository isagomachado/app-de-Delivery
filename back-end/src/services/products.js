const models = require('../database/models');

class ProductsService {
  static async getAll() {
    const products = await models.Product.findAll();
    return products;
  }
}

module.exports = ProductsService;