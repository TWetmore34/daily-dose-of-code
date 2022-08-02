const router = require('express').Router();

// /profile
router.get('/', (req, res)=> {
    res.render('profile', {layout: 'main'})
})

module.exports = router;