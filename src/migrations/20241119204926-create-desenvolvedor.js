'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('desenvolvedor', {
      id_desenvolvedor: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
      },
      
      username: { 
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true 
      },
      
      nome: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      
      email: { 
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true 
      },
      
      senha: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      
      id_endereco: { 
        type: Sequelize.INTEGER, 
        references: { 
          model: 'endereco', 
          key: 'id_endereco' } 
      },
      
      bio: { 
        type: Sequelize.TEXT 
      },
    
      avaliacao: { 
        type: Sequelize.FLOAT, 
        defaultValue: 0 
      },

      foto_perfil: { 
        type: Sequelize.STRING, 
        allowNull: true 
      },
    
      createdAt: { 
        type: Sequelize.DATE, 
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), 
      },

      updatedAt: { 
        type: Sequelize.DATE, 
        allowNull: false ,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('desenvolvedor');
  }
};