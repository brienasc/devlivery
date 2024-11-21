const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Rota de desenvolvedor/tecnologia funcionando');
});

module.exports = router;