'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const tecnologias = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/tecnologia.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('tecnologia', tecnologias.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('tecnologia', null, {});
    }
};