'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Desenvolvedor extends Model {
    static associate(models) {
      Desenvolvedor.belongsTo(models.Usuario, { foreignKey: 'id' });
      Desenvolvedor.belongsToMany(models.Idioma, { through: 'desenvolvedor_idioma', foreignKey: 'id_desenvolvedor',});
    }
  }
  Desenvolvedor.init({
    bio: DataTypes.TEXT,
    avaliacao: DataTypes.DECIMAL(3, 2),
    feed_portifolio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Desenvolvedor',
    tableName: 'desenvolvedor',
    timestamps: true,
  });
  return Desenvolvedor;
};