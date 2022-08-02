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


    codeproblem: {
      type: DataTypes.STRING,
      allowNull: false,
      User INT,
      FOREIGN KEY (User)
      REFERENCES User(id)
      ON DELETE SET NULL
    },


    bodytemplate: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    recipientemail: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    senderemail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Email',
  }
);

module.exports = Email;
