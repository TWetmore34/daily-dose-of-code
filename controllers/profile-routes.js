const router = require('express').Router();
const { User } = require('../models')
// /profile
router.get('/', async (req, res)=> {
    try {
    // grabs the currently logged in user
    console.log(req.session)
    const userData = await User.findOne({ 
        where: {
            id: req.session.user_id
            
        }
     });

    //  serializes user data
    const user = await userData.get({ plain: true })

    res.render('profile', {
        user,
        loggedIn: req.session.logged_in,
        streak: req.session.streak || 0
     })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;