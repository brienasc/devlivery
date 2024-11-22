const { Usuario } = require('../models');

const usuarioServices = {
    async create(data) {
        return await Usuario.create(data);
    },
    async getAll() {
        return await Usuario.findAll();
    },
    async getById(id) {
        return await Usuario.findByPk(id);
    },
    async update(id, data) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;
        return await usuario.update(data);
    },
    async delete(id) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return false;
        await usuario.destroy();
        return true;
    }
};

module.exports = usuarioServices;