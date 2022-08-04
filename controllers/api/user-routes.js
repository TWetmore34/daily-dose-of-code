const router = require('express').Router();
const { User, Challenge, Trial } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    let userData = await User.findAll({ include: { model: Trial } });
    let users = userData.map(user => user.get({ plain: true }));

    res.json(users)
})

// create new user
// /api/users
router.post('/', async (req, res) => {
    try {
    const newUser = await {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const createMe = await User.create(newUser)
    // serialize data to grab id num
    const user = createMe.get({ plain: true });
    // grab all challenges and serialize
    const challenges = await Challenge.findAll()
    const challengeData = await challenges.map(challenge => challenge.get({ plain: true }))
    
    // loop thru challengeData arr and create a Trial for the user on each trial. these are used for a null reading that will render 'start now' (see ./utils/)
    for(i=0;i<challengeData.length;i++){
        // status: null so that it doesnt read as true or false on the helper
        const startTrials = {
            user_id: user.id,
            challenge_id: challengeData[i].id,
            submission_detail: 'trial created',
            status: null
        }
        await Trial.create(startTrials);
    }

    // create session obj and send response msg
    if(createMe) {
        req.session.save(() => {
            req.session.user_id = createMe.id
            req.session.logged_in = true

            res.status(201).json({ msg: createMe })
        })
    }
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// login
// /api/users/login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(!userData){
            res.status(400).json({ msg: 'Incorrect email or password.' });
            return;
        }

        
        // if false, failure msg
        // if true, create session obj and login
        const compare = await userData.checkPassword(req.body.password);

        if(!compare) {
            res.status(400).json({msg: 'Incorrect email or password. Please try again!'})
            return;
        }

        req.session.save(()=>{
            req.session.logged_in = true;
            req.session.user_id = userData.id;
            res.status(200).json({ user: userData, message: 'You are now logged in!' })
        })

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});
// logout
router.delete('/logout', async (req, res) => {
    try {
        if(req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end()
            })
        } else {
            res.status(404).end()
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// update user
router.put('/:id', async (req, res) => {
    User.update(
        {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            attempted: req.body.attempted,
            passed: req.body.passed
        },
        {
            where: {id: req.params.id},
            individualHooks: true,
        },
    )
    .then((updatedUser) => {
        res.json(updatedUser);
    })
    .catch((err)=>{
        console.error(err);
        res.json(err);
    })
})


// delete user
router.delete('/:id', async (req, res) => {
    User.destroy({
        where: { id: req.params.id}
    })
    .then((deletedBook)=>{
        res.json({msg: 'Successfully deleted!'})
    })
    .catch((err)=>{
        console.log(err);
        res.json(err);
    })
})

module.exports = router;