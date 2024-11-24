const idiomaServices = require('../services/idiomaServices');

const idiomaController = {
    // Listar idiomas pré-definidos
    async list(req, res) {
        try {
            const idiomas = await idiomaServices.getAll();
            res.status(200).json(idiomas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Adicionar idioma ao perfil do desenvolvedor
    async addToDeveloper(req, res) {
        try {
            const { id_desenvolvedor, id_idioma } = req.body;
            const result = await idiomaServices.addToDeveloper(id_desenvolvedor, id_idioma);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = idiomaController;