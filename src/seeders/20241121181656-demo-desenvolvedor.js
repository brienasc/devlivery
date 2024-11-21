'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const desenvolvedores = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/desenvolvedor.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('desenvolvedor', desenvolvedores.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('desenvolvedor', null, {});
    }
};