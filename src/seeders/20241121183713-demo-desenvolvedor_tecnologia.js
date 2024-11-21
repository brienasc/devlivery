'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const desenvolvedores_tecnologias = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/desenvolvedor_tecnologia.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('desenvolvedor_tecnologia', desenvolvedores_tecnologias.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('desenvolvedor_tecnologia', null, {});
    }
};