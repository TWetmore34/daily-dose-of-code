const router = require('express').Router();
const { loginAuth } = require('../utils/login-check');

// /home
// add loginauth to this once login request is set
router.get('/', (req, res)=> {
    console.log(req.session)
    res.render('challenges', {layout: 'main'})
})

module.exports = router;