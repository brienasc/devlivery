'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projeto_desenvolvedor', {
      id_projeto: {
        type: Sequelize.INTEGER,
        references: {
            model: 'projetos',
            key: 'id',
        },
        onDelete: 'CASCADE',
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
    data_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    data_fim: {
        type: Sequelize.DATE,
        allowNull: true,
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
await queryInterface.dropTable('projeto_desenvolvedor');
},
};