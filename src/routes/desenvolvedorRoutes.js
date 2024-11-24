const express = require('express');
const desenvolvedorController = require('../controllers/desenvolvedorController');
const router = express.Router();

router.post('/register', desenvolvedorController.register);
router.post('/login', desenvolvedorController.login);
router.post('/:id/projetos/candidatar', desenvolvedorController.applyForProject);
router.get('/tecnologias', desenvolvedorController.getTecnologias);
router.get('/idiomas', desenvolvedorController.getIdiomas);
router.get('/:id', desenvolvedorController.getProfile);
router.put('/:id/foto', desenvolvedorController.updateProfilePicture);
router.get('/:id/projetos/disponiveis', desenvolvedorController.getAvailableProjects);
router.get('/:id/projetos/candidaturas', desenvolvedorController.getAppliedProjects);
router.put('/:id/profile', desenvolvedorController.updateProfile);
router.put('/:id/change-password', desenvolvedorController.changePassword);

module.exports = router;