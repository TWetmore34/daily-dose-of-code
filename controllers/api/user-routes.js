const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    let userData = await User.findAll();
    let users = userData.map(user => user.get({ plain: true }));

    res.json(users)
})

// create new user
router.post('/', async (req, res) => {
    try {
    const newUser = await {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }

    const createMe = await User.create(newUser)
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
router.post('/login', async (req, res) => {
    const userData = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!userData){
        res.status(400).json({ msg: 'Incorrect email or password' });
        return
    }
    // add check for email w bcrypt .compare()
    // if true, create session obj and login
    // false, failure msg
})

module.exports = router;