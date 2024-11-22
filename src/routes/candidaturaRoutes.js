const express = require('express');
const candidaturaController = require('../controllers/candidaturaController');
const router = express.Router();

router.post('/', candidaturaController.create);
router.get('/', candidaturaController.getAll);
router.get('/:id', candidaturaController.getById);
router.put('/:id', candidaturaController.update);
router.delete('/:id', candidaturaController.delete);

module.exports = router;