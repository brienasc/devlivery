const desenvolvedorServices = require('../services/desenvolvedorServices');
const tecnologiaService = require('../services/tecnologiaServices');
const idiomaService = require('../services/idiomaServices');
const bcrypt = require('bcrypt');

const desenvolvedorController = {
    async register(req, res) {
        try {
            const { username, nome, email, senha, id_endereco, bio } = req.body;
            const desenvolvedor = await desenvolvedorServices.register({ username, nome, email, senha, id_endereco, bio });
            res.status(201).json(desenvolvedor);
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

    async getIdiomas(req, res) {
        try {
            const idiomas = await idiomaServices.getAll();
            res.status(200).json(idiomas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const desenvolvedor = await desenvolvedorServices.login(email, senha);
            if (!desenvolvedor) return res.status(401).json({ message: "Credenciais inválidas" });
            res.status(200).json(desenvolvedor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async updateProfile(req, res) {
        try {
            const updatedData = req.body;
            const updatedDesenvolvedor = await desenvolvedorServices.updateProfile(req.params.id, updatedData);
            if (!updatedDesenvolvedor) return res.status(404).json({ message: "Desenvolvedor não encontrado" });
            res.status(200).json(updatedDesenvolvedor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async changePassword(req, res) {
        try {
            const { senhaAtual, novaSenha } = req.body;
            const success = await desenvolvedorServices.changePassword(req.params.id, senhaAtual, novaSenha);
            if (!success) return res.status(401).json({ message: "Senha atual incorreta" });
            res.status(200).json({ message: "Senha atualizada com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    async getProfile(req, res) {
        try {
            const desenvolvedor = await desenvolvedorServices.getProfile(req.params.id);
            if (!desenvolvedor) return res.status(404).json({ message: "Desenvolvedor não encontrado" });
            res.status(200).json(desenvolvedor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async updateProfilePicture(req, res) {
        try {
            const fotoPerfil = req.body.foto_perfil;
            const desenvolvedor = await desenvolvedorServices.updateProfilePicture(req.params.id, fotoPerfil);
            if (!desenvolvedor) return res.status(404).json({ message: "Desenvolvedor não encontrado" });
            res.status(200).json(desenvolvedor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAvailableProjects(req, res) {
        try {
            const projects = await desenvolvedorServices.getAvailableProjects();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAppliedProjects(req, res) {
        try {
            const projects = await desenvolvedorServices.getAppliedProjects(req.params.id);
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    async applyForProject(req, res) {
        try {
            const { idProjeto } = req.body;
            const candidatura = await desenvolvedorServices.applyForProject(req.params.id, idProjeto);
            res.status(201).json(candidatura);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = desenvolvedorController;