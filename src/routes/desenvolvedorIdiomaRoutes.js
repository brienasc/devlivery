const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Rota de desenvolvedor/idioma funcionando');
});

module.exports = router;