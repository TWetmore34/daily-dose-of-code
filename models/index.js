const User = require('./User');
const Email = require('./Email');
const Difficulty = require('./Difficulty')

// user will have many challenges that reference the foregin keys completed and attempted



// add additional models for export inside the curly braces
module.exports = { User, Email, Difficulty }