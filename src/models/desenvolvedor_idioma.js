'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DesenvolvedorIdioma extends Model {
        static associate(models) {
            DesenvolvedorIdioma.belongsTo(models.Desenvolvedor, { foreignKey: 'id_desenvolvedor' });
            DesenvolvedorIdioma.belongsTo(models.Idioma, { foreignKey: 'id_idioma' });
        }
    }
    DesenvolvedorIdioma.init({
        id_desenvolvedor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_idioma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        nivel_proficiencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'DesenvolvedorIdioma',
        tableName: 'desenvolvedor_idioma',
        timestamps: true,
    });
    return DesenvolvedorIdioma;
};