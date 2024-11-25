const tecnologiaServices = require('../services/tecnologiaServices');

const tecnologiaController = {
    //Listar tecnologias
    async list(req, res) {
        try {
            const tecnologias = await tecnologiaServices.getAll();
            res.status(200).json(tecnologias);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Adicionar tecnologia a desenvolvedor
    async addToDeveloper(req, res) {
        try {
            const { id_desenvolvedor, id_tecnologia } = req.body;
            const result = await tecnologiaServices.addToDeveloper(id_desenvolvedor, id_tecnologia);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //Filtrar desenvolvedores por tecnologia
    async filterByTechnology(req, res) {
        try {
            const { technologyId } = req.params;
            const developers = await tecnologiaServices.findDevelopersByTechnology(technologyId);
            res.status(200).json(developers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = tecnologiaController;