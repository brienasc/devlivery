'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {  // Nome do modelo como 'Endereco'
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
  }, {
    tableName: 'endereco'  // Caso a tabela tenha um nome específico no banco
  });

  return Endereco;
};