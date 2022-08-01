const { appendFile } = require('fs');

const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json({ msg: 'login rotue' })
});

module.exports = router;