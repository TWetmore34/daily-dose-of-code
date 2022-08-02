const router = require('express').Router();

// add a redirect to /home if the user is still logged in

// /
router.get('/', (req, res)=> {
    res.render('login', {layout: 'main'})
})

module.exports = router;