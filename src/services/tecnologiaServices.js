const { Tecnologia, Desenvolvedor, Projeto } = require('../models');

const tecnologiaService = {
    // Get all predefined technologies
    async getAll() {
        return await Tecnologia.findAll();
    },

    // Add technology to developer profile
    async addToDeveloper(id_desenvolvedor, id_tecnologia) {
        const developer = await Desenvolvedor.findByPk(id_desenvolvedor);
        if (!developer) throw new Error('Desenvolvedor não encontrado');
        await developer.addTecnologia(id_tecnologia);
        return { message: 'Tecnologia adicionada ao desenvolvedor' };
    },

    // Find developers by technology
    async findDevelopersByTechnology(id_tecnologia) {
        const developers = await Desenvolvedor.findAll({
            include: {
                model: Tecnologia,
                where: { id: id_tecnologia },
                through: { attributes: [] }
            }
        });
        return developers;
    }
};

module.exports = tecnologiaService;