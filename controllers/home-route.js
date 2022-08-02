const router = require('express').Router();
const { Challenge } = require('../models')
const { loginAuth } = require('../utils/login-check');

// /home
// add loginauth to this once login request is set
router.get('/', async (req, res)=> {
    const challengeData = await Challenge.findAll()

    const challenges = await challengeData.map(user => user.get({ plain: true }))
    console.log(challenges)
    res.render('challenges', {challenges})
})

module.exports = router;