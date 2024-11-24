// services/idiomaServices.js
const { Idioma, Desenvolvedor } = require('../models');

const idiomaService = {
    // Get all predefined languages
    async getAll() {
        return await Idioma.findAll();
    },

    // Add language to developer profile
    async addToDeveloper(developerId, languageId) {
        const developer = await Desenvolvedor.findByPk(developerId);
        if (!developer) throw new Error('Desenvolvedor não encontrado');
        await developer.addIdioma(languageId);
        return { message: 'Idioma adicionado ao desenvolvedor' };
    }
};

module.exports = idiomaService;