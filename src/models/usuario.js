'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    username: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    id_endereco: DataTypes.INTEGER,
    tipo: DataTypes.ENUM('Desenvolvedor', 'Empresa')
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: true,
  });
  return Usuario;
};