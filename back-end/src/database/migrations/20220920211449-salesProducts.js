'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('sales_products', {
      saleId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'sale_id'
      },
      productId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'product_id'
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.dropTable('sales_products');
  }
};
