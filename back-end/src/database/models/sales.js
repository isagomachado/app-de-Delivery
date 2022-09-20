/**
 * @param {import('DataTypes').Sequelize} DataTypes 
 * @param {import('sequelize').Sequelize} sequelize 
*/

module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'seller_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
      field: 'total_price'
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_address'
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_number'
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATETIME,
      field: 'sale_date'
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    tableName: 'sales',
    timestamps: false, 
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      foreignKey: 'userId', as: 'userId',
    });
  };
  
  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      foreignKey: 'sellerId', as: 'sellerId',
    });
  };

  return Sales;
};
