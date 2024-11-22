const express = require('express');
const projetoController = require('../controllers/projetoController');
const router = express.Router();

router.post('/', projetoController.create);
router.get('/', projetoController.getAll);
router.get('/:id', projetoController.getById);
router.put('/:id', projetoController.update);
router.delete('/:id', projetoController.delete);

module.exports = router;