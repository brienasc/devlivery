'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProjetoDesenvolvedor extends Model {
        static associate(models) {
            ProjetoDesenvolvedor.belongsTo(models.Projeto, { foreignKey: 'id_projeto' });
            ProjetoDesenvolvedor.belongsTo(models.Desenvolvedor, { foreignKey: 'id_desenvolvedor' });
        }
    }
    ProjetoDesenvolvedor.init({
        id_projeto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_desenvolvedor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        data_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        data_fim: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'ProjetoDesenvolvedor',
        tableName: 'projeto_desenvolvedor',
        timestamps: true,
    });
    return ProjetoDesenvolvedor;
};