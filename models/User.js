const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');;

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
        // keeps track of individual users
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    //   stores email - must be unique to prevent multiple accounts on one email
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
      },
    //   username is just for display
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //   password validates to require at least 8 characters
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
      },
    //   stores the id's of attempted challenges
      attemped: {
        type: DataTypes.INTEGER,
        references: {
            model: 'challenge',
            key: 'id'
        }
      },
    //   stores the id's of completed challenges
      passed: {
        type: DataTypes.INTEGER,
        references: {
            model: 'challenge',
            key: 'id'
        }
      }
    },
    {
        // hash's user passwords on creation
        hooks: {
            beforeCreate: async (newUserData) => {
                const newPass = await bcrypt.hash(newUserData.password, 8);
                newUserData.password = newPass;
                return newPass;
            },
            beforeBulkCreate: async(newUserData)=> {
              const newPass = await bcrypt.hash(newUserData.password, 8);
              newUserData.password = newPass;
              return newPass;
            },
            beforeUpdate: async(newUserData) => {
                const newPass = await bcrypt.hash(newUserData.password, 8);
                newUserData.password = newPass;
                return newPass
            }
        },
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
  module.exports = User;