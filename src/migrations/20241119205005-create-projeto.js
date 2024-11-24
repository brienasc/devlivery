'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projeto', {
    
    id_projeto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    },

    status: {
        type: Sequelize.ENUM('aberto', 'em andamento', 'concluído'),
        allowNull: false,
        defaultValue: 'aberto',
    },

    id_empresa: {
        type: Sequelize.INTEGER,
        references: {
            model: 'empresa',
            key: 'id_empresa',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

await queryInterface.createTable('projeto_desenvolvedor', {
    id_projeto: {
      type: Sequelize.INTEGER,
      references: {
        model: 'projeto',
        key: 'id_projeto'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },

    id_desenvolvedor: {
      type: Sequelize.INTEGER,
      references: {
        model: 'desenvolvedor',
        key: 'id_desenvolvedor'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },

    data_inicio: {
      type: Sequelize.DATE,
      allowNull: false
    },

    data_fim: {
      type: Sequelize.DATE,
      allowNull: true
    },

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },

    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  });
},

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('projeto_desenvolvedor');
        await queryInterface.dropTable('projeto');
    },
};