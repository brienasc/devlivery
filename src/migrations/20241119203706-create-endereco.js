'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('endereco', {
    id_endereco: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
});
},

async down(queryInterface) {
await queryInterface.dropTable('endereco');
},
};