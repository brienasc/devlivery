'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    static associate(models) {
      // Defina as associações aqui, se necessário
    }
  }
  Endereco.init({
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'endereco',
    timestamps: true,
  });
  return Endereco;
};