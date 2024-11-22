const { Endereco } = require('../models');

const enderecoServices = {
    async create(data) {
        return await Endereco.create(data);
    },
    async getAll() {
        return await Endereco.findAll();
    },
    async getById(id) {
        return await Endereco.findByPk(id);
    },
    async update(id, data) {
        const endereco = await Endereco.findByPk(id);
        if (!endereco) return null;
        return await endereco.update(data);
    },
    async delete(id) {
        const endereco = await Endereco.findByPk(id);
        if (!endereco) return false;
        await endereco.destroy();
        return true;
    }
};

module.exports = enderecoServices;