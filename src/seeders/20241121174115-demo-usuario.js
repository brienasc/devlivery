'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const usuarios = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../data/usuario.json'), 'utf-8')
        );

        await queryInterface.bulkInsert('usuario', usuarios.map(item => ({
            ...item,
            createdAt: new Date(),
            updatedAt: new Date()
        })), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('usuario', null, {});
    }
};