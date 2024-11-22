const express = require('express');
const tecnologiaController = require('../controllers/tecnologiaController');
const router = express.Router();

router.post('/', tecnologiaController.create);
router.get('/', tecnologiaController.getAll);
router.get('/:id', tecnologiaController.getById);
router.put('/:id', tecnologiaController.update);
router.delete('/:id', tecnologiaController.delete);

module.exports = router;