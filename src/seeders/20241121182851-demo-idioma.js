'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const idiomas = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/idioma.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('idioma', idiomas.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('idioma', null, {});
    }
};