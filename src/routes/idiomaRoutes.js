// routes/idiomaRoutes.js
const express = require('express');
const idiomaController = require('../controllers/idiomaController');
const router = express.Router();

router.get('/', idiomaController.list);
router.post('/add-to-developer', idiomaController.addToDeveloper);

module.exports = router;