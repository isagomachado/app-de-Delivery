const models = require('../database/models');

class SaleProductsService {
  static async create(objSaleProduct) {
    const result = await models.Sale.create(objSaleProduct);
    return result;
  }
}

module.exports = SaleProductsService;