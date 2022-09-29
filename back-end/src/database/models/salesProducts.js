/**
 * @param {import('DataTypes').Sequelize} DataTypes 
 * @param {import('sequelize').Sequelize} sequelize 
*/

module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'sale_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
        references: {
          model: 'Sale',
          key: 'id',
        },
    },
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'product_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
        references: {
          model: 'Product',
          key: 'id',
        },
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  },
  {
    tableName: 'sales_products',
    timestamps: false,
  });

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sale, {
      foreignKey: 'saleId', as: 'sale',
    });
  };

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Product, {
      foreignKey: 'productId', as: 'product',
    });
  };

  return SalesProduct;
};
