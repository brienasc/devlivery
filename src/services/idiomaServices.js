// services/idiomaServices.js
const { Idioma, Desenvolvedor } = require('../models');

const idiomaService = {
    // Get all predefined languages
    async getAll() {
        return await Idioma.findAll();
    },

    // Add language to developer profile
    async addToDeveloper(id_desenvolvedor, id_idioma) {
        const developer = await Desenvolvedor.findByPk(id_desenvolvedor);
        if (!developer) throw new Error('Desenvolvedor não encontrado');
        await developer.addIdioma(id_idioma);
        return { message: 'Idioma adicionado ao desenvolvedor' };
    }
};

module.exports = idiomaService;