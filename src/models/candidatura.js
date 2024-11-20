'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class candidatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  candidatura.init({
    id_desenvolvedor: DataTypes.INTEGER,
    id_projeto: DataTypes.INTEGER,
    data_candidatura: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM, 
      values: ['pendente', 'aprovado', 'rejeitado'],
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'candidatura',
  });
  return candidatura;
};