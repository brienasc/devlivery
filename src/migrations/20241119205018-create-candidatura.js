'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('candidatura', {
      id_candidatura: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    id_desenvolvedor: {
        type: Sequelize.INTEGER,
        references: {
            model: 'desenvolvedor',
            key: 'id_desenvolvedor',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
    },

    id_projeto: {
        type: Sequelize.INTEGER,
        references: {
            model: 'projeto',
            key: 'id_projeto',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
    },

    data_candidatura: {
        type: Sequelize.DATE,
        allowNull: false,
    },

    status: {
        type: Sequelize.ENUM('pendente', 'aceita', 'rejeitada'),
        defaultValue: 'pendente',
        allowNull: false,
    },

    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },

    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
});
},

async down(queryInterface) {
await queryInterface.dropTable('candidatura');
},
};