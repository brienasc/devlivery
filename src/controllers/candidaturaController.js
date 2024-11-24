const candidaturaService = require('../services/candidaturaServices');

const candidaturaController = {
    async create(req, res) {
        try {
            const candidatura = await candidaturaService.create(req.body);
            res.status(201).json(candidatura);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getByProjetoId(req, res) {
        try {
            const candidaturas = await candidaturaService.getByProjetoId(req.params.projetoId);
            res.status(200).json(candidaturas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getByDesenvolvedorId(req, res) {
        try {
            const candidaturas = await candidaturaService.getByDesenvolvedorId(req.params.id_desenvolvedor);
            res.status(200).json(candidaturas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async updateStatus(req, res) {
        try {
            const candidatura = await candidaturaService.updateStatus(req.params.id, req.body.status);
            if (!candidatura) return res.status(404).json({ message: 'Candidatura não encontrada' });
            res.status(200).json(candidatura);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = candidaturaController;