'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('desenvolvedor_tecnologia', {
      id_desenvolvedor: {
        type: Sequelize.INTEGER,
        references: {
            model: 'desenvolvedor',
            key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
    },
    id_tecnologia: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tecnologia',
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
await queryInterface.dropTable('desenvolvedor_tecnologia');
},
};