'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Lê o arquivo estados_cidades.json
        const cidadesEstados = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/estados_cidades.json'), 'utf-8')
        );

        // Insere os dados na tabela endereco
        await queryInterface.bulkInsert('endereco', cidadesEstados.map(item => ({
            estado: item.estado,
            cidade: item.cidade,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        // Remove os dados da tabela endereco
        await queryInterface.bulkDelete('endereco', null, {});
    }
};