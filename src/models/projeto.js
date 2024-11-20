'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projeto.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM, 
      values: ['aberto', 'em andamento', 'concluído'],
      allowNull: false,
    },
    id_empresa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projeto',
  });
  return projeto;
};