'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class desenvolvedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  desenvolvedor.init({
    id_usuario: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    avaliacao: DataTypes.DECIMAL,
    feed_portifolio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'desenvolvedor',
  });
  return desenvolvedor;
};