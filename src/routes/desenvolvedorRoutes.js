const express = require('express');
const desenvolvedorController = require('../controllers/desenvolvedorController');
const router = express.Router();

router.post('/', desenvolvedorController.create);
router.get('/', desenvolvedorController.getAll);
router.get('/:id', desenvolvedorController.getById);
router.put('/:id', desenvolvedorController.update);
router.delete('/:id', desenvolvedorController.delete);

module.exports = router;