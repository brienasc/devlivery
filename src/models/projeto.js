'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    static associate(models) {
      Projeto.belongsTo(models.Empresa, { foreignKey: 'id_empresa', as: 'empresa' });
      Projeto.belongsToMany(models.Desenvolvedor, { through: 'projeto_desenvolvedor', as: 'desenvolvedor', foreignKey: 'id_projeto' });
      Projeto.hasMany(models.Candidatura, { foreignKey: 'id_projeto', as: 'candidatura' });
    }
  }

  Projeto.init({
    id_projeto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
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
      allowNull: false,
      defaultValue: 'aberto'
    },
    
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Empresa',
        key: 'id_empresa',
    },
    }
  }, 
  
  {
    sequelize,
    modelName: 'Projeto',
    tableName: 'projeto',
    timestamps: true,
  });


  return Projeto;
};
