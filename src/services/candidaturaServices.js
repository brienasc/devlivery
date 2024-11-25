const { Candidatura, Desenvolvedor, Projeto } = require('../models');

const candidaturaService = {
    async create(data) {
        return await Candidatura.create(data);
    },

    async getByProjetoId(id_projeto) {
        return await Candidatura.findAll({
            where: { id_projeto },
            include: [{model: Desenvolvedor, as: 'desenvolvedor'}]
        });
    },

    async getByDesenvolvedorId(id_desenvolvedor) {
        return await Candidatura.findAll({
            where: { id_desenvolvedor },
            include: [{model: Projeto, as: 'projeto'}]
        });
    },

    async updateStatus(id, status) {
        const candidatura = await Candidatura.findByPk(id);
        if (!candidatura) return null;
        return await candidatura.update({ status });
    }
};

module.exports = candidaturaService;