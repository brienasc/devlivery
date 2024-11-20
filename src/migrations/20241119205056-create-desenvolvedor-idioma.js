'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('desenvolvedor_idioma', {
      id_desenvolvedor: {
        type: Sequelize.INTEGER,
        references: {
            model: 'desenvolvedores',
            key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
    },
    id_idioma: {
        type: Sequelize.INTEGER,
        references: {
            model: 'idiomas',
            key: 'id',
        },
        onDelete: 'CASCADE',
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
await queryInterface.dropTable('desenvolvedor_idioma');
},
};