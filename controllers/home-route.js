const { appendFile } = require('fs');

const router = require('express').Router();

router.get('/home', async (req, res) => {
    res.json({ msg: 'testing' })
});

module.exports = router;