/**
 * @param {import('DataTypes').Sequelize} DataTypes 
 * @param {import('sequelize').Sequelize} sequelize 
*/

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'sale_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
        references: {
          model: 'Sales',
          key: 'id',
        },
    },
    productId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'product_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
        references: {
          model: 'Products',
          key: 'id',
        },
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  },
  {
    tableName: 'salesProducts',
    timestamps: false, 
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Sales, {
      foreignKey: 'saleId', as: 'sale',
    });
  };

  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Products, {
      foreignKey: 'productId', as: 'product',
    });
  };

  return SalesProducts;
};
