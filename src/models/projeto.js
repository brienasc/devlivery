'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    static associate(models) {
      Projeto.belongsTo(models.Empresa, { foreignKey: 'id_empresa' });
    }
  }

  Projeto.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('aberto', 'em andamento', 'concluído'),
      allowNull: false
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Projeto',
    tableName: 'projeto',
    timestamps: true,
  });

  return Projeto;
};