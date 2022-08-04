const router = require('express').Router();
const { Challenge, Difficulty, Trial } = require('../models');
const createTrial = require('../utils/createTrial');
const { loginAuth } = require('../utils/login-check');

// /home
// add loginauth to this once login request is set
// leaving a note here so i remember to ask - what if we allow null on Trial.status so that when its null, we can let them know it hasnt been attempted?
// should remove the need for the attempted categories from User
// if yes, We make a custom hbs helper that checks the value of challenge.Trials.status => if true, return 'completed', false return 'in progress, null returm 'not attempted'
router.get('/', loginAuth, async (req, res)=> {
    try {
    const challengeData = await Challenge.findAll({
        include: [{ model: Difficulty }, { model: Trial
            // should grab only the users trials
            // leaving this commented out bc we cant log in yet
         }]
    })

    const challenges = await challengeData.map(user => user.get({ plain: true }))
    res.render('challenges', { challenges })
}
catch (err) {
    res.status(500).json(err)
}
});

router.get('/:id', createTrial, loginAuth, async (req, res) => {
    try {
        console.log(req.session)
    // finds requested challenge id
    const challengeData = await Challenge.findByPk(req.params.id);
    // serializes data
    const challenge = challengeData.get({ plain: true });

    res.render('trial', { challenge })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;