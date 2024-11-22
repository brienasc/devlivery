'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Candidatura extends Model {
        static associate(models) {
            Candidatura.belongsTo(models.Desenvolvedor, { foreignKey: 'id_desenvolvedor' });
            Candidatura.belongsTo(models.Projeto, { foreignKey: 'id_projeto' });
        }
    }
    Candidatura.init({
        id_desenvolvedor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_projeto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data_candidatura: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pendente', 'aceita', 'rejeitada'),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Candidatura',
        tableName: 'candidatura',
        timestamps: true,
    });
    return Candidatura;
};