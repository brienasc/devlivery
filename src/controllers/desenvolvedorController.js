const desenvolvedorService = require('../services/desenvolvedorServices');

const desenvolvedorController = {
    async create(req, res) {
        try {
            const desenvolvedor = await desenvolvedorService.create(req.body);
            res.status(201).json(desenvolvedor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const desenvolvedores = await desenvolvedorService.getAll();
            res.status(200).json(desenvolvedores);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const desenvolvedor = await desenvolvedorService.getById(req.params.id);
            if (!desenvolvedor) return res.status(404).json({ message: "Desenvolvedor não encontrado" });
            res.status(200).json(desenvolvedor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedDesenvolvedor = await desenvolvedorService.update(req.params.id, req.body);
            if (!updatedDesenvolvedor) return res.status(404).json({ message: "Desenvolvedor não encontrado" });
            res.status(200).json(updatedDesenvolvedor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await desenvolvedorService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Desenvolvedor não encontrado" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = desenvolvedorController;