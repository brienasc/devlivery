const express = require('express');
const projetoController = require('../controllers/projetoController');
const router = express.Router();

router.post('/', projetoController.create);
router.get('/', projetoController.getAll);
router.get('/:id', projetoController.getById);
router.get('/empresa/:empresaId', projetoController.getByEmpresaId);
router.put('/:id/status', projetoController.updateStatus);

module.exports = router;