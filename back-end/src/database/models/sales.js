/**
 * @param {import('DataTypes').Sequelize} DataTypes 
 * @param {import('sequelize').Sequelize} sequelize 
*/

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
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
          model: 'User',
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
          model: 'User',
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
      type: DataTypes.DATE,
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

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId', as: 'user',
    });
  };

  return Sale;
};
