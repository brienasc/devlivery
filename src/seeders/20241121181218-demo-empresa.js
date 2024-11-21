'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const empresas = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/empresa.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('empresa', empresas.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('empresa', null, {});
    }
};