const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/devlivery.sqlite', // Caminho do banco
});

module.exports = sequelize;