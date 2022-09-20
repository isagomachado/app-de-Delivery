/**
 * @param {import('DataTypes').Sequelize} DataTypes 
 * @param {import('sequelize').Sequelize} sequelize 
*/

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    tableName: 'users',
    timestamps: false, 
  });

  Users.associate = (models) => {
    Users.hasMany(models.Sales, {
      foreignKey: 'userId', as: 'userId',
    });
  };

  Users.associate = (models) => {
    Users.hasMany(models.Sales, {
      foreignKey: 'sellerId', as: 'sellerId',
    });
  };

  return Users;
};
