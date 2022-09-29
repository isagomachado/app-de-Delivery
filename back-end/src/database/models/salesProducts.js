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
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProduct,
      as: 'sale',
    });
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SalesProduct,
      as: 'product',
    });
  };

  // SalesProduct.associate = (models) => {
  //   SalesProduct.belongsTo(models.Product, {
  //     foreignKey: 'productId', as: 'product',
  //   });
  // };

  return SalesProduct;
};
