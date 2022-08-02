const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trial extends Model {}

Trial.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            },
        }, 
        challenge_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        submission_details: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, 
    {
        sequelize,
        freezeTableName: true,
        tableName: 'trials',
        underscored: true
    }
);

module.exports = Trial