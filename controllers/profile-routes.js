const router = require('express').Router();

router.get('/:id', async (req, res) => {
    res.json({ msg: `profile ${req.params.id} route` })
});

module.exports = router;