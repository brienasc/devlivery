// src/app.js

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const routes = require('./routes/index'); // Index com todas as rotas combinadas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', routes);

// Conectar ao banco e sincronizar modelos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar os modelos:', error);
  });

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});