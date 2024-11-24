const empresaServices = require('../services/empresaServices');
const tecnologiaServices = require('../services/tecnologiaServices');
const projetoServices = require('../services/projetoServices');
const bcrypt = require('bcrypt');

const empresaController = {
    //Registrar
    async register(req, res) {
        try {
            const { username, nome, email, senha, id_endereco, telefone } = req.body;
            const empresa = await empresaServices.register({ username, nome, email, senha, id_endereco, telefone });
            res.status(201).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Login
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const empresa = await empresaServices.login(email, senha);
            if (!empresa) return res.status(401).json({ message: "Credenciais inválidas" });
            res.status(200).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Atualizar perfil
    async updateProfile(req, res) {
        try {
            const updatedData = req.body;
            const updatedEmpresa = await empresaServices.updateProfile(req.params.id, updatedData);
            if (!updatedEmpresa) return res.status(404).json({ message: "Empresa não encontrada" });
            res.status(200).json(updatedEmpresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Mudar senha
    async changePassword(req, res) {
        try {
            const { senhaAtual, novaSenha } = req.body;
            const success = await empresaServices.changePassword(req.params.id, senhaAtual, novaSenha);
            if (!success) return res.status(401).json({ message: "Senha atual incorreta" });
            res.status(200).json({ message: "Senha atualizada com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
   
    //Perfil
    async getProfile(req, res) {
        try {
            const empresa = await empresaServices.getProfile(req.params.id);
            if (!empresa) return res.status(404).json({ message: "Empresa não encontrada" });
            res.status(200).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Atualizar foto de perfil
    async updateProfilePicture(req, res) {
        try {
            const fotoPerfil = req.body.foto_perfil;
            const empresa = await empresaServices.updateProfilePicture(req.params.id, fotoPerfil);
            if (!empresa) return res.status(404).json({ message: "Empresa não encontrada" });
            res.status(200).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Criar projeto
    async createProject(req, res) {
        try {
            const projectData = req.body;
            const project = await empresaServices.createProject(req.params.id, projectData);
            res.status(201).json(project);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Visualizar candidatos ao projeto
    async getCandidatesByProject(req, res) {
        try {
            const candidates = await empresaServices.getCandidatesByProject(req.params.id_projeto);
            res.status(200).json(candidates);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    //Atualizar candidatura (aceitar ou recusar)
    async updateCandidatureStatus(req, res) {
        try {
            const { status } = req.body;
            const candidatura = await empresaServices.updateCandidatureStatus(req.params.idCandidatura, status);
            if (!candidatura) return res.status(404).json({ message: "Candidatura não encontrada" });
            res.status(200).json(candidatura);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = empresaController;