const express = require('express');

const candidaturaRoutes = require('./candidaturaRoutes');
const desenvolvedorRoutes = require('./desenvolvedorRoutes');
const empresaRoutes = require('./empresaRoutes');
const enderecoRoutes = require('./enderecoRoutes');
const idiomaRoutes = require('./idiomaRoutes');
const projetoRoutes = require('./projetoRoutes');
const tecnologiaRoutes = require('./tecnologiaRoutes');

const router = express.Router();

router.use('/candidaturas', candidaturaRoutes);
router.use('/desenvolvedores', desenvolvedorRoutes);
router.use('/empresas', empresaRoutes);
router.use('/enderecos', enderecoRoutes);
router.use('/idiomas', idiomaRoutes);
router.use('/projetos', projetoRoutes);
router.use('/tecnologias', tecnologiaRoutes);

module.exports = router;