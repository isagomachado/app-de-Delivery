const models = require('../database/models');

class ProductsService {
  static async getAll() {
    const products = await models.Product.findAll();
    return products;
  }

  static async getOne(id) {
    const result = await models.Product.findAll({
      where: { id },
      raw: true,
    });
    
    return result;
  }
}

module.exports = ProductsService;