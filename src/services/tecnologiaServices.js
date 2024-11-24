const { Tecnologia, Desenvolvedor, Projeto } = require('../models');

const tecnologiaService = {
    // Get all predefined technologies
    async getAll() {
        return await Tecnologia.findAll();
    },

    // Add technology to developer profile
    async addToDeveloper(developerId, technologyId) {
        const developer = await Desenvolvedor.findByPk(developerId);
        if (!developer) throw new Error('Desenvolvedor não encontrado');
        await developer.addTecnologia(technologyId);
        return { message: 'Tecnologia adicionada ao desenvolvedor' };
    },

    // Add technology to project
    async addToProject(projectId, technologyId) {
        const project = await Projeto.findByPk(projectId);
        if (!project) throw new Error('Projeto não encontrado');
        await project.addTecnologia(technologyId);
        return { message: 'Tecnologia adicionada ao projeto' };
    },

    // Find developers by technology
    async findDevelopersByTechnology(technologyId) {
        const developers = await Desenvolvedor.findAll({
            include: {
                model: Tecnologia,
                where: { id: technologyId },
                through: { attributes: [] }
            }
        });
        return developers;
    }
};

module.exports = tecnologiaService;