'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class desenvolvedor_tecnologia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  desenvolvedor_tecnologia.init({
    id_desenvolvedor: DataTypes.INTEGER,
    id_tecnologia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'desenvolvedor_tecnologia',
  });
  return desenvolvedor_tecnologia;
};