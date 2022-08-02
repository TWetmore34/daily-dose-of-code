const sequelize = require('../config/connection');
const {User, Challenge, Trial, Difficulty} = require('../models');

const userData = require('./user.json');
const challengeData = require('./challenges.json')
const trialData = require('./trials.json')
const difficultyData = require('./difficulty.json')

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userData);

    await Difficulty.bulkCreate(difficultyData);

    await Challenge.bulkCreate(challengeData);

    await Trial.bulkCreate(trialData);
}

seedDatabase();