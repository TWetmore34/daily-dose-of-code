const router = require('express').Router();
// const { User } = require('../../models');

// create new user
router.post('/', async (req, res) => {
    try {
    const newUser = await {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }
    // uncomment line below me once models are set up
    // const createMe = await User.create(newUser)
    res.status(201).json({ msg: newUser })
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