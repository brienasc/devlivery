const { Empresa } = require('../models');

const empresaServices = {
    async create(data) {
        return await Empresa.create(data);
    },
    async getAll() {
        return await Empresa.findAll();
    },
    async getById(id) {
        return await Empresa.findByPk(id);
    },
    async update(id, data) {
        const empresa = await Empresa.findByPk(id);
        if (!empresa) return null;
        return await empresa.update(data);
    },
    async delete(id) {
        const empresa = await Empresa.findByPk(id);
        if (!empresa) return false;
        await empresa.destroy();
        return true;
    }
};

module.exports = empresaServices;