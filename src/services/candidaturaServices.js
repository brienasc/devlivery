// services/candidaturaServices.js
const { Candidatura, Desenvolvedor, Projeto } = require('../models');

const candidaturaService = {
    async create(data) {
        return await Candidatura.create(data);
    },

    async getByProjetoId(projetoId) {
        return await Candidatura.findAll({
            where: { projetoId },
            include: [Desenvolvedor]
        });
    },

    async getByDesenvolvedorId(desenvolvedorId) {
        return await Candidatura.findAll({
            where: { desenvolvedorId },
            include: [Projeto]
        });
    },

    async updateStatus(id, status) {
        const candidatura = await Candidatura.findByPk(id);
        if (!candidatura) return null;
        return await candidatura.update({ status });
    }
};

module.exports = candidaturaService;