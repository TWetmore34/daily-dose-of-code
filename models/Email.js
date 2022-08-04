const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Email extends Model {}

Email.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },


    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    codeProblem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Challenge',
        key: 'id',
      }
    },

    bodyTemplate: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    recipientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    senderEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },


  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Email',
  }
);

module.exports = Email;
