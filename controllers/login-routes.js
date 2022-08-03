const router = require('express').Router();
const { loggedInAuth } = require('../utils/login-check')
// add a redirect to /home if the user is still logged in

// /
// add loggedInAuth once login/create is set up
router.get('/', loggedInAuth, (req, res)=> {
    try {
    res.render('login', {layout: 'main'})
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;