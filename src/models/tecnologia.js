'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tecnologia extends Model {
    static associate(models) {
      // Defina associações, se necessário
    }
  }

  Tecnologia.init({
    nome: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tecnologia',
    tableName: 'tecnologia',
    timestamps: true,
  });

  return Tecnologia;
};