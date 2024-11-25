'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Desenvolvedor extends Model {
    static associate(models) {
      Desenvolvedor.belongsTo(models.Endereco, { foreignKey: 'id_endereco' });
      Desenvolvedor.belongsToMany(models.Tecnologia, { through: 'desenvolvedor_tecnologia', as: 'tecnologia', foreignKey: 'id_desenvolvedor' });
      Desenvolvedor.belongsToMany(models.Idioma, { through: 'desenvolvedor_idioma', foreignKey: 'id_desenvolvedor' });
      Desenvolvedor.hasMany(models.Candidatura, { foreignKey: 'id_desenvolvedor' });
    }
  }

  Desenvolvedor.init({
    id_desenvolvedor: {
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
    type: DataTypes.INTEGER 
    },
    
    bio: { 
    type: DataTypes.TEXT 
    },
    
    avaliacao: { 
    type: DataTypes.FLOAT, 
    defaultValue: 0 
    },

  }, 
  
  {
    sequelize,
    modelName: 'Desenvolvedor',
    tableName: 'desenvolvedor',
    timestamps: true,
  });

  return Desenvolvedor;
};