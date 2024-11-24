const empresaServices = require('../services/empresaServices');
const tecnologiaServices = require('../services/tecnologiaServices');
const projetoServices = require('../services/projetoServices');
const bcrypt = require('bcrypt');

const empresaController = {
    async register(req, res) {
        try {
            const { username, nome, email, senha, id_endereco, telefone } = req.body;
            const empresa = await empresaServices.register({ username, nome, email, senha, id_endereco, telefone });
            res.status(201).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

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
    
    async getProfile(req, res) {
        try {
            const empresa = await empresaServices.getProfile(req.params.id);
            if (!empresa) return res.status(404).json({ message: "Empresa não encontrada" });
            res.status(200).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

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

    async createProject(req, res) {
        try {
            const projectData = req.body;
            const project = await empresaServices.createProject(req.params.id, projectData);
            res.status(201).json(project);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getTecnologias(req, res) {
        try {
            const tecnologias = await tecnologiaServices.getAll();
            res.status(200).json(tecnologias);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async addTecnologiaToProject(req, res) {
        try {
            const { projectId, technologyId } = req.body;
            await tecnologiaServices.addToProject(projectId, technologyId);
            res.status(200).json({ message: 'Tecnologia adicionada ao projeto' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }, 

    async getCandidatesByProject(req, res) {
        try {
            const candidates = await empresaServices.getCandidatesByProject(req.params.idProjeto);
            res.status(200).json(candidates);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
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