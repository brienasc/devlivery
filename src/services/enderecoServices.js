const { Endereco } = require('../models');

const enderecoService = {
    async getAll() {
        try {
            return await Endereco.findAll();
        } catch (error) {
            throw new Error('Erro ao buscar endereços.');
        }
    }
};

module.exports = enderecoService;