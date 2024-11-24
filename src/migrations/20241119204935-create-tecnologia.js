'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tecnologia', {
    id_tecnologia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    nome: {
        type: Sequelize.STRING,
        unique: true,
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

//Tabela para relacionamento desenvolvedor-tecnologia
await queryInterface.createTable('desenvolvedor_tecnologia', {
    id_desenvolvedor: {
      type: Sequelize.INTEGER,
      references: {
          model: 'desenvolvedor',
          key: 'id_desenvolvedor'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    id_tecnologia: {
      type: Sequelize.INTEGER,
      references: {
          model: 'tecnologia',
          key: 'id_tecnologia'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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

down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('desenvolvedor_tecnologia');
  await queryInterface.dropTable('tecnologia');
}
};