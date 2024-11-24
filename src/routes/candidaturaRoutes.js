// routes/candidaturaRoutes.js
const express = require('express');
const candidaturaController = require('../controllers/candidaturaController');
const router = express.Router();

router.post('/', candidaturaController.create); // Criar candidatura
router.get('/projeto/:projetoId', candidaturaController.getByProjetoId); // Ver candidaturas por projeto
router.get('/desenvolvedor/:desenvolvedorId', candidaturaController.getByDesenvolvedorId); // Ver candidaturas de desenvolvedor
router.put('/:id/status', candidaturaController.updateStatus); // Atualizar status de candidatura

module.exports = router;