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
        username: req.body.username,
        password: req.body.password
    }
    // uncomment line below me once models are set up
    const createMe = await User.create(newUser)
    res.status(201).json({ msg: createMe })
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
    const compare = await bcrypt.compare(req.body.password, userData.password);
    if(compare) {
        // create session.loggedIn as true
        res.status(200).json({ msg: 'logged in!' });
    } else {
        res.status(400).json({ msg: 'incorrect username or password' })
    }
})


module.exports = router;