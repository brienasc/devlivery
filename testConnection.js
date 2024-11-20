const { Sequelize } = require('sequelize');

// Configuração do SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/devlivery.sqlite', // Caminho para o arquivo local
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados SQLite estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
  }
})();