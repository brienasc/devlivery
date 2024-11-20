'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class desenvolvedor_idioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  desenvolvedor_idioma.init({
    id_desenvolvedor: DataTypes.INTEGER,
    id_idioma: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'desenvolvedor_idioma',
  });
  return desenvolvedor_idioma;
};