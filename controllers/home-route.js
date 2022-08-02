const router = require('express').Router();
const { Challenge, Difficulty, Trial } = require('../models')
const { loginAuth } = require('../utils/login-check');

// /home
// add loginauth to this once login request is set
// leaving a note here so i remember to ask - what if we allow null on Trial.status so that when its null, we can let them know it hasnt been attempted?
// should remove the need for the attempted categories from User
// if yes, We make a custom hbs helper that checks the value of challenge.Trials.status => if true, return 'completed', false return 'in progress, null returm 'not attempted'
router.get('/', async (req, res)=> {
    const challengeData = await Challenge.findAll({
        include: [{ model: Difficulty }, { model: Trial, 
            // should grab only the users trials
            // leaving this commented out bc we cant log in yet
            // where: {
            //     user_id: req.session.user_id
            // }
         }]
    })

    const challenges = await challengeData.map(user => user.get({ plain: true }))
    console.log(req.session)
    res.render('challenges', { challenges })
});

router.get('/:id', async (req, res) => {
    const challengeData = await Challenge.findByPk(req.params.id);
    const challenge = challengeData.get({ plain: true });

    res.render('trial', { challenge })
})

module.exports = router;