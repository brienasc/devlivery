const projetoService = require('../services/projetoServices');

const projetoController = {
    async create(req, res) {
        try {
            const projeto = await projetoService.create(req.body);
            res.status(201).json(projeto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const projetos = await projetoService.getAll();
            res.status(200).json(projetos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const projeto = await projetoService.getById(req.params.id);
            if (!projeto) return res.status(404).json({ message: "Projeto não encontrado" });
            res.status(200).json(projeto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedProjeto = await projetoService.update(req.params.id, req.body);
            if (!updatedProjeto) return res.status(404).json({ message: "Projeto não encontrado" });
            res.status(200).json(updatedProjeto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await projetoService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Projeto não encontrado" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = projetoController;