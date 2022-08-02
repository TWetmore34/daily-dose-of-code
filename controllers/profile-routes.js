const router = require('express').Router();

router.get('/', (req, res)=> {
    res.render('profile', {layout: 'main'})
})

module.exports = router;