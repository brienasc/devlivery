// routes/enderecoRoutes.js
const express = require('express');
const enderecoController = require('../controllers/enderecoController');
const router = express.Router();

router.get('/', enderecoController.getAllEnderecos);

module.exports = router;