const tecnologiaService = require('../services/tecnologiaServices');

const tecnologiaController = {
    async create(req, res) {
        try {
            const tecnologia = await tecnologiaService.create(req.body);
            res.status(201).json(tecnologia);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const tecnologias = await tecnologiaService.getAll();
            res.status(200).json(tecnologias);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const tecnologia = await tecnologiaService.getById(req.params.id);
            if (!tecnologia) return res.status(404).json({ message: "Tecnologia não encontrada" });
            res.status(200).json(tecnologia);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedTecnologia = await tecnologiaService.update(req.params.id, req.body);
            if (!updatedTecnologia) return res.status(404).json({ message: "Tecnologia não encontrada" });
            res.status(200).json(updatedTecnologia);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await tecnologiaService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Tecnologia não encontrada" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = tecnologiaController;