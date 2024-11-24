'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('idioma', {
      id_idioma: {
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

    // Tabela para relacionamento desenvolvedor-idioma
    await queryInterface.createTable('desenvolvedor_idioma', {
      id_desenvolvedor: {
          type: Sequelize.INTEGER,
          references: {
              model: 'desenvolvedor',
              key: 'id_desenvolvedor'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      id_idioma: {
          type: Sequelize.INTEGER,
          references: {
              model: 'idioma',
              key: 'id_idioma'
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
      }
    });
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('desenvolvedor_idioma');
    await queryInterface.dropTable('idioma');
  },
  };