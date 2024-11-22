const { Idioma } = require('../models');

const idiomaService = {
    async create(data) {
        return await Idioma.create(data);
    },
    async getAll() {
        return await Idioma.findAll();
    },
    async getById(id) {
        return await Idioma.findByPk(id);
    },
    async update(id, data) {
        const idioma = await Idioma.findByPk(id);
        if (!idioma) return null;
        return await idioma.update(data);
    },
    async delete(id) {
        const idioma = await Idioma.findByPk(id);
        if (!idioma) return false;
        await idioma.destroy();
        return true;
    }
};

module.exports = idiomaService;