const User = require('./User');
const Difficulty = require('./Difficulty');
const Challenge = require('./Challenge');
const Trial = require('./Trials');
const Email = require('./Email');

// user will have many attempted challenges
User.hasMany(Challenge, {
    foreignKey: 'attempted'
});

// user has many passed challenges (hopefully!)
User.hasMany(Challenge, {
    foreignKey: 'passed'
});

// challenges have one difficulty
Challenge.hasOne(Difficulty, {
    foreignKey: 'difficulty_id'
});

// difficulties have many challenges (this should potentially let us sort by difficulty if we get time)
Difficulty.hasMany(Challenge, {
    foreignKey: 'difficulty_id'
});

// each email has one challenge to send
Email.hasOne(Challenge, {
    foreignKey: 'codeProblem'
});

// each trial belongs to one user
Trial.belongsTo(User, {
    foreignKey: 'user_id'
});

// users have many trials
User.hasMany(Trial, {
    foreignKey: 'user_id'
});

Trial.hasOne(Challenge, {
    foreignKey: 'challenge_id'
});

Challenge.hasMany(Trial, {
    foreignKey: 'challenge_id'
})

// add additional models for export inside the curly braces
module.exports = { User, Email, Difficulty, Challenge, Trial }