'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    static associate(models) {
      Empresa.belongsTo(models.Usuario, { foreignKey: 'id' });
      Empresa.hasMany(models.Projeto, { foreignKey: 'id_empresa' });
    }
  }
  Empresa.init({
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
    tableName: 'empresa',
    timestamps: true,
  });
  return Empresa;
};