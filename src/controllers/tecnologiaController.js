const tecnologiaServices = require('../services/tecnologiaServices');

const tecnologiaController = {
    async list(req, res) {
        try {
            const tecnologias = await tecnologiaServices.getAll();
            res.status(200).json(tecnologias);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async addToDeveloper(req, res) {
        try {
            const { developerId, technologyId } = req.body;
            const result = await tecnologiaServices.addToDeveloper(developerId, technologyId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async addToProject(req, res) {
        try {
            const { projectId, technologyId } = req.body;
            const result = await tecnologiaServices.addToProject(projectId, technologyId);
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