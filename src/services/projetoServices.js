const { Projeto } = require('../models');

const projetoServices = {
    async create(data) {
        return await Projeto.create(data);
    },
    async getAll() {
        return await Projeto.findAll();
    },
    async getById(id) {
        return await Projeto.findByPk(id);
    },
    async update(id, data) {
        const projeto = await Projeto.findByPk(id);
        if (!projeto) return null;
        return await projeto.update(data);
    },
    async delete(id) {
        const projeto = await Projeto.findByPk(id);
        if (!projeto) return false;
        await projeto.destroy();
        return true;
    }
};

module.exports = projetoServices;