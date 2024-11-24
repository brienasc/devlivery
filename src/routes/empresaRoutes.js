const express = require('express');
const empresaController = require('../controllers/empresaController');
const router = express.Router();

router.post('/register', empresaController.register);
router.post('/login', empresaController.login);
router.post('/:id/projetos', empresaController.createProject);
router.post('/projeto/tecnologia', empresaController.addTecnologiaToProject);
router.put('/:id/profile', empresaController.updateProfile);
router.put('/:id/change-password', empresaController.changePassword);
router.put('/:id/foto', empresaController.updateProfilePicture);
router.put('/candidaturas/:idCandidatura/status', empresaController.updateCandidatureStatus);
router.get('/:id', empresaController.getProfile);
router.get('/tecnologias', empresaController.getTecnologias);
router.get('/projetos/:idProjeto/candidatos', empresaController.getCandidatesByProject);


module.exports = router;