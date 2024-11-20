'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('desenvolvedor', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    bio: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    avaliacao: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: true,
    },
    feed_portifolio: {
        type: Sequelize.TEXT,
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
await queryInterface.dropTable('desenvolvedor');
},
};