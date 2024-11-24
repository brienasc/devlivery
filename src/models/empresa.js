'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    static associate(models) {
      Empresa.hasMany(models.Projeto, { foreignKey: 'id_empresa' });
      Empresa.belongsTo(models.Endereco, { foreignKey: 'id_endereco' });
    }
  }

  Empresa.init({
    id_empresa: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },

    username: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
    },
    
    nome: { 
    type: DataTypes.STRING, 
    allowNull: false 
    },

    email: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
    },
    
    senha: { 
    type: DataTypes.STRING, 
    allowNull: false 
    },

    foto_perfil: { 
    type: DataTypes.STRING, 
    allowNull: true 
    },

    id_endereco: { 
    type: DataTypes.INTEGER,
    references: {
      model: 'endereco',
      key: 'id_endereco',
      }
    },

    telefone: { 
    type: DataTypes.STRING 
    },

  }, 
  
  {
    sequelize,
    modelName: 'Empresa',
    tableName: 'empresa',
    timestamps: true,
  });

  return Empresa;
};