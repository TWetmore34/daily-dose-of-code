const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Difficulty extends Model {}

// so this model will basically be all seesed beforehand
Difficulty.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
      
    {
        sequelize,
        freezeTableName: true,
        tableName: 'difficulty'
    }
);

module.exports = Difficulty;