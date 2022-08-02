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


    problem: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    tests: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    difficulty_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Difficulty',
        key: 'id',
      }
    },
<<<<<<< HEAD:models/Challenge.js

 },

 
=======
  },
  },
>>>>>>> c8df276a841d4db7ae35bd4b691451c1aaedeaee:models/Challenge
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Challenge',
  }

);

module.exports = Challenge;
