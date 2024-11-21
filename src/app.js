const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000; // Porta definida no .env ou padrão 3000

// Rota simples para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.send('Servidor funcionando corretamente!');
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;