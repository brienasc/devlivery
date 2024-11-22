const { Candidatura } = require('../models');

const candidaturaService = {
    async create(data) {
        return await Candidatura.create(data);
    },
    async getAll() {
        return await Candidatura.findAll();
    },
    async getById(id) {
        return await Candidatura.findByPk(id);
    },
    async update(id, data) {
        const candidatura = await Candidatura.findByPk(id);
        if (!candidatura) return null;
        return await candidatura.update(data);
    },
    async delete(id) {
        const candidatura = await Candidatura.findByPk(id);
        if (!candidatura) return false;
        await candidatura.destroy();
        return true;
    }
};

module.exports = candidaturaService;