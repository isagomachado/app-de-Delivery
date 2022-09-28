const models = require('../database/models');

class SaleProductsService {
  static async create(objSaleProduct) {
    const result = await models.SalesProduct.create(objSaleProduct);
    return result;
  }

  static async getOne(saleId) {
    const result = await models.SalesProduct.findAll({
      where: { saleId },
      raw: true,
    });
    
    return result;
  }
}

module.exports = SaleProductsService;