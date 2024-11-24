'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tecnologia extends Model {
    static associate(models) {
      Tecnologia.belongsToMany(models.Desenvolvedor, {
        through: 'desenvolvedor_tecnologia',
        foreignKey: 'id_tecnologia',
        otherKey: 'id_desenvolvedor'
      });
      Tecnologia.belongsToMany(models.Projeto, {
        through: 'projeto_tecnologia',
        foreignKey: 'id_tecnologia',
        otherKey: 'id_projeto'
      });
    }
}

  Tecnologia.init({
    id_tecnologia: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
    nome: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, 
  
  {
    sequelize,
    modelName: 'Tecnologia',
    tableName: 'tecnologia',
    timestamps: true,
  });

  return Tecnologia;
};
