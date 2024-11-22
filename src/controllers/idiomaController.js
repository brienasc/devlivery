const idiomaService = require('../services/idiomaServices');

const idiomaController = {
    async create(req, res) {
        try {
            const idioma = await idiomaService.create(req.body);
            res.status(201).json(idioma);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getAll(req, res) {
        try {
            const idiomas = await idiomaService.getAll();
            res.status(200).json(idiomas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getById(req, res) {
        try {
            const idioma = await idiomaService.getById(req.params.id);
            if (!idioma) return res.status(404).json({ message: "Idioma não encontrado" });
            res.status(200).json(idioma);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const updatedIdioma = await idiomaService.update(req.params.id, req.body);
            if (!updatedIdioma) return res.status(404).json({ message: "Idioma não encontrado" });
            res.status(200).json(updatedIdioma);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const success = await idiomaService.delete(req.params.id);
            if (!success) return res.status(404).json({ message: "Idioma não encontrado" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = idiomaController;