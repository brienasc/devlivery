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
    async getAll(req, res) {
        try {
            const candidaturas = await candidaturaService.getAll();
            res.status(200).json(candidaturas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const candidatura = await candidaturaService.getById(req.params.id);
            if (!candidatura) return res.status(404).json({ message: "Candidatura não encontrada" });
            res.status(200).json(candidatura);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedCandidatura = await candidaturaService.update(req.params.id, req.body);
            if (!updatedCandidatura) return res.status(404).json({ message: "Candidatura não encontrada" });
            res.status(200).json(updatedCandidatura);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await candidaturaService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Candidatura não encontrada" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = candidaturaController;