const express = require('express');
const idiomaController = require('../controllers/idiomaController');
const router = express.Router();

router.post('/', idiomaController.create);
router.get('/', idiomaController.getAll);
router.get('/:id', idiomaController.getById);
router.put('/:id', idiomaController.update);
router.delete('/:id', idiomaController.delete);

module.exports = router;