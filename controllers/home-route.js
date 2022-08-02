const router = require('express').Router();

// /home
router.get('/', (req, res)=> {
    res.render('challenges', {layout: 'main'})
})

module.exports = router;