// controllers/idiomaController.js
const idiomaServices = require('../services/idiomaServices');

const idiomaController = {
    // List all predefined languages
    async list(req, res) {
        try {
            const idiomas = await idiomaServices.getAll();
            res.status(200).json(idiomas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Add language to developer profile
    async addToDeveloper(req, res) {
        try {
            const { developerId, languageId } = req.body;
            const result = await idiomaServices.addToDeveloper(developerId, languageId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = idiomaController;