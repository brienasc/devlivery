// routes/projetoRoutes.js
const express = require('express');
const projetoController = require('../controllers/projetoController');
const router = express.Router();

router.post('/', projetoController.create); // Criar projeto
router.get('/', projetoController.getAll); // Ver projetos abertos
router.get('/:id', projetoController.getById); // Ver projeto por ID
router.get('/empresa/:empresaId', projetoController.getByEmpresaId); // Ver projetos de uma empresa
router.put('/:id/status', projetoController.updateStatus); // Atualizar status do projeto

module.exports = router;