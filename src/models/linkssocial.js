'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class linksSocial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  linksSocial.init({
    id_usuario: DataTypes.INTEGER,
    plataforma: DataTypes.STRING,
    url: DataTypes.STRING,
    icon_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'linksSocial',
  });
  return linksSocial;
};