const { Tecnologia } = require('../models');

const tecnologiaServices = {
    async create(data) {
        return await Tecnologia.create(data);
    },
    async getAll() {
        return await Tecnologia.findAll();
    },
    async getById(id) {
        return await Tecnologia.findByPk(id);
    },
    async update(id, data) {
        const tecnologia = await Tecnologia.findByPk(id);
        if (!tecnologia) return null;
        return await tecnologia.update(data);
    },
    async delete(id) {
        const tecnologia = await Tecnologia.findByPk(id);
        if (!tecnologia) return false;
        await tecnologia.destroy();
        return true;
    }
};

module.exports = tecnologiaServices;