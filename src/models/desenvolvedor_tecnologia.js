'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DesenvolvedorTecnologia extends Model {
        static associate(models) {
            DesenvolvedorTecnologia.belongsTo(models.Desenvolvedor, { foreignKey: 'id_desenvolvedor' });
            DesenvolvedorTecnologia.belongsTo(models.Tecnologia, { foreignKey: 'id_tecnologia' });
        }
    }
    DesenvolvedorTecnologia.init({
        id_desenvolvedor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_tecnologia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        nivel_experiencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'DesenvolvedorTecnologia',
        tableName: 'desenvolvedor_tecnologia',
        timestamps: true,
    });
    return DesenvolvedorTecnologia;
};