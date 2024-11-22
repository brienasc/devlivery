const express = require('express');
const enderecoController = require('../controllers/enderecoController');
const router = express.Router();

router.post('/', enderecoController.create);
router.get('/', enderecoController.getAll);
router.get('/:id', enderecoController.getById);
router.put('/:id', enderecoController.update);
router.delete('/:id', enderecoController.delete);

module.exports = router;

/*
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Rota de endereço funcionando');
});

module.exports = router;*/