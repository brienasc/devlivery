// routes/tecnologiaRoutes.js
const express = require('express');
const tecnologiaController = require('../controllers/tecnologiaController');
const router = express.Router();

router.get('/', tecnologiaController.list);
router.get('/filter/:technologyId', tecnologiaController.filterByTechnology);
router.post('/add-to-developer', tecnologiaController.addToDeveloper);
router.post('/add-to-project', tecnologiaController.addToProject);

module.exports = router;