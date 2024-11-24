const projetoServices = require('../services/projetoServices');

const projetoController = {
    async create(req, res) {
        try {
            const projeto = await projetoServices.create(req.body);
            res.status(201).json(projeto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAll(req, res) {
        try {
            const projetos = await projetoServices.getAll();
            res.status(200).json(projetos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getById(req, res) {
        try {
            const projeto = await projetoServices.getById(req.params.id);
            if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
            res.status(200).json(projeto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getByEmpresaId(req, res) {
        try {
            const projetos = await projetoServices.getByEmpresaId(req.params.empresaId);
            res.status(200).json(projetos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async updateStatus(req, res) {
        try {
            const projeto = await projetoServices.updateStatus(req.params.id, req.body.status);
            if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
            res.status(200).json(projeto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = projetoController;