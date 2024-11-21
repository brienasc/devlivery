const express = require('express');
const router = express.Router();
const { Usuario } = require('../models'); // Altere para um modelo existente

router.get('/test', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao acessar o banco de dados' });
  }
});

module.exports = router;
