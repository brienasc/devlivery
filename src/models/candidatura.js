'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Candidatura extends Model {
        static associate(models) {
            Candidatura.belongsTo(models.Desenvolvedor, { foreignKey: 'id_desenvolvedor', as: 'desenvolvedores' });
            Candidatura.belongsTo(models.Projeto, { foreignKey: 'id_projeto', as: 'projetos' });
        }
    }
    
    Candidatura.init({
        id_candidatura: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },      
        
        id_desenvolvedor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'desenvolvedor',
                key: 'id_desenvolvedor',
            },
        },

        id_projeto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'projeto',
                key: 'id_projeto',
            }
        },
    
        data_candidatura: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        
        status: {
            type: DataTypes.ENUM('pendente', 'aceita', 'rejeitada'),
            allowNull: false,
            defaultValue: 'pendente',
        },
    }, 
    
    {
        sequelize,
        modelName: 'Candidatura',
        tableName: 'candidatura',
        timestamps: true,
    });
    
    return Candidatura;
};