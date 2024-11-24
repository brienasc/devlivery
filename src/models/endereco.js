'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    static associate(models) {
      Endereco.hasMany(models.Desenvolvedor, { foreignKey: 'id_endereco' });
      Endereco.hasMany(models.Empresa, { foreignKey: 'id_endereco' });
    }
  }
  
  Endereco.init({
    id_endereco: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },

  
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING
  }, 
  
  {
    sequelize,
    modelName: 'Endereco',
    tableName: 'endereco',
    timestamps: true,
  });
  
  return Endereco;
};