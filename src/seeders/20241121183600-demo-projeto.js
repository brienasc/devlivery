'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const projetos = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/projeto.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('projeto', projetos.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('projeto', null, {});
    }
};