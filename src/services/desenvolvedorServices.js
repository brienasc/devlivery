const { Desenvolvedor } = require('../models');

const desenvolvedorServices = {
    async create(data) {
        return await Desenvolvedor.create(data);
    },
    async getAll() {
        return await Desenvolvedor.findAll();
    },
    async getById(id) {
        return await Desenvolvedor.findByPk(id);
    },
    async update(id, data) {
        const desenvolvedor = await Desenvolvedor.findByPk(id);
        if (!desenvolvedor) return null;
        return await desenvolvedor.update(data);
    },
    async delete(id) {
        const desenvolvedor = await Desenvolvedor.findByPk(id);
        if (!desenvolvedor) return false;
        await desenvolvedor.destroy();
        return true;
    }
};

module.exports = desenvolvedorServices;