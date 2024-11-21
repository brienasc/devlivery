'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const projetos_desenvolvedores = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/projeto_desenvolvedor.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('projeto_desenvolvedor', projetos_desenvolvedores.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('projeto_desenvolvedor', null, {});
    }
};