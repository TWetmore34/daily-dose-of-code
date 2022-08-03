const router = require('express').Router();
const { User } = require('../models')
// /profile
router.get('/', async (req, res)=> {
    try {
    // grabs the currently logged in user
    const userData = await User.findOne({ 
        where: {
            id: req.session.user_id
            
        }
     });

    //  serializes user data
    const user = await userData.get({ plain: true })

    res.render('profile', { user })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;