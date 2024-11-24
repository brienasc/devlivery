const express = require('express');
const candidaturaController = require('../controllers/candidaturaController');
const router = express.Router();

router.post('/', candidaturaController.create);
router.get('/projeto/:projetoId', candidaturaController.getByProjetoId);
router.get('/desenvolvedor/:desenvolvedorId', candidaturaController.getByDesenvolvedorId);
router.put('/:id/status', candidaturaController.updateStatus);

module.exports = router;