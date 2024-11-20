'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('candidatura', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    id_desenvolvedor: {
        type: Sequelize.INTEGER,
        references: {
            model: 'desenvolvedores',
            key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
    },
    id_projeto: {
        type: Sequelize.INTEGER,
        references: {
            model: 'projetos',
            key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
    },
    data_candidatura: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('pendente', 'aceita', 'rejeitada'),
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});
},
async down(queryInterface) {
await queryInterface.dropTable('candidatura');
},
};