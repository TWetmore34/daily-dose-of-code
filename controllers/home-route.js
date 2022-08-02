const router = require('express').Router();

router.get('/', (req, res)=> {
    res.render('challenges', {layout: 'main'})
})

module.exports = router;