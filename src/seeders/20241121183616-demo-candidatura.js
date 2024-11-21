'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const candidaturas = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/candidatura.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('candidatura', candidaturas.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('candidatura', null, {});
    }
};