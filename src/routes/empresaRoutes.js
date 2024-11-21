const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Rota de empresa funcionando');
});

module.exports = router;