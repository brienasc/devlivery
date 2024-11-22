const express = require('express');
const empresaController = require('../controllers/empresaController');
const router = express.Router();

router.post('/', empresaController.create);
router.get('/', empresaController.getAll);
router.get('/:id', empresaController.getById);
router.put('/:id', empresaController.update);
router.delete('/:id', empresaController.delete);

module.exports = router;