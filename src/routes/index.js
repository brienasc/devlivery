// src/routes/index.js

const express = require('express');

const candidaturaRoutes = require('./candidaturaRoutes');
const desenvolvedorRoutes = require('./desenvolvedorRoutes');
const desenvolvedorIdiomaRoutes = require('./desenvolvedorIdiomaRoutes');
const desenvolvedorTecnologiaRoutes = require('./desenvolvedorTecnologiaRoutes');
const empresaRoutes = require('./empresaRoutes');
const enderecoRoutes = require('./enderecoRoutes');
const idiomaRoutes = require('./idiomaRoutes');
const projetoRoutes = require('./projetoRoutes');
const projetoDesenvolvedorRoutes = require('./projetoDesenvolvedorRoutes');
const tecnologiaRoutes = require('./tecnologiaRoutes');
const usuarioRoutes = require('./usuarioRoutes');

const router = express.Router();

router.use('/candidaturas', candidaturaRoutes);
router.use('/desenvolvedores', desenvolvedorRoutes);
//router.use('/desenvolvedores/idiomas', desenvolvedorIdiomaRoutes);
//router.use('/desenvolvedores/tecnologias', desenvolvedorTecnologiaRoutes);
router.use('/empresas', empresaRoutes);
router.use('/enderecos', enderecoRoutes);
router.use('/idiomas', idiomaRoutes);
router.use('/projetos', projetoRoutes);
//router.use('/projetos/desenvolvedores', projetoDesenvolvedorRoutes);
router.use('/tecnologias', tecnologiaRoutes);
router.use('/usuarios', usuarioRoutes);

module.exports = router;