const User = require('./User');
const Difficulty = require('./Difficulty')
const Challenge = require('./Challenge')
const Trial = require('./Trials');
const Email = require('./Email');

// user will have many challenges that reference the foregin keys completed and attempted



// add additional models for export inside the curly braces
module.exports = { User, Email, Difficulty, Challenge, Trial }