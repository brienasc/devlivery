// services/projetoServices.js
const { Projeto, Tecnologia, Empresa } = require('../models');

const projetoService = {
    async create(data) {
        const projeto = await Projeto.create(data);
        if (data.tecnologias) {
            await projeto.setTecnologias(data.tecnologias); // Assume que data.tecnologias é um array de IDs
        }
        return projeto;
    },

    async getAll() {
        return await Projeto.findAll({
            where: { status: 'aberto' },
            include: [Tecnologia, Empresa]
        });
    },

    async getById(id) {
        return await Projeto.findByPk(id, { include: [Tecnologia, Empresa] });
    },

    async getByEmpresaId(id_empresa) {
        return await Projeto.findAll({
            where: { id_empresa },
            include: [Tecnologia]
        });
    },

    async updateStatus(id, status) {
        const projeto = await Projeto.findByPk(id);
        if (!projeto) return null;
        return await projeto.update({ status });
    }
};

module.exports = projetoService;