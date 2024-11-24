'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Idioma extends Model {
        static associate(models) {
            Idioma.belongsToMany(models.Desenvolvedor, {
                through: 'desenvolvedor_idioma',
                foreignKey: 'id_idioma',
                otherKey: 'id_desenvolvedor'
            });
        }
    }

    Idioma.init({
        id_idioma: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        nome: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Idioma',
        tableName: 'idioma',
        timestamps: true,
    });

    return Idioma;
};