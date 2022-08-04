const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    let userData = await User.findAll();
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
    console.log(newUser);  

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
// /api/users/login
router.post('/login', async (req, res) => {
    try {
    const userData = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!userData){
        res.status(400).json({ msg: 'Incorrect email or password' });
        return
    }

    
    // if true, create session obj and login
    // false, failure msg
    const compare = await bcrypt.compare(req.body.password, userData.password);
    if(compare) {
        // create session.loggedIn as true
            req.session.save(() => {
                req.session.user_id = userData.id
                req.session.logged_in = true
                res.status(200).json({ msg: 'logged in!' });

            })
    } else {
        res.status(400).json({ msg: 'incorrect username or password' })
    }
}
    catch (err) {
        res.status(500).json(err)
}
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