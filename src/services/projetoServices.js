const { Projeto, Tecnologia, Empresa } = require('../models');

const projetoService = {
    async create(data) {
        const projeto = await Projeto.create(data);
        if (data.tecnologias) {
            await projeto.setTecnologias(data.tecnologias);
        }
        return projeto;
    },

    async getAll() {
        return await Projeto.findAll({
            include: [{ model: Empresa, as: 'empresa' }],
            where: { status: 'aberto' }
        });
    },

    async getById(id) {
        return await Projeto.findByPk(id, { include: [{ model: Empresa, as: 'empresa'}] });
    },

    async getByEmpresaId(id_empresa) {
        return await Projeto.findAll({
            where: { id_empresa },
            include: [{ model: Empresa, as: 'empresa'}]
        });
    },

    async updateStatus(id, status) {
        const projeto = await Projeto.findByPk(id);
        if (!projeto) return null;
        return await projeto.update({ status });
    }
};

module.exports = projetoService;