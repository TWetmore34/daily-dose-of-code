const { NOW } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Challenge extends Model {}

Challenge.init(
 {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
 

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    detail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    tests: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Difficulty',
        key: 'id',
      }
    },


    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

 },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Challenge',
  }

);

module.exports = Challenge;
