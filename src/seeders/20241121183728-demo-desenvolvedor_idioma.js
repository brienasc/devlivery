'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const desenvolvedores_idiomas = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/desenvolvedor_idioma.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('desenvolvedor_idioma', desenvolvedores_idiomas.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('desenvolvedor_idioma', null, {});
    }
};