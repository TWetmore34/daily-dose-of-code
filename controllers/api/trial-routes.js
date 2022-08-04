const router = require('express').Router();
const { Trial } = require('../../models');

router.post('/', async (req, res) => {
    try {
    const newTrial = {
        user_id: req.session.user_id,
        challenge_id: req.body.challenge_id,
        submission_detail: req.body.submission_detail,
        status: true
    };
    await Trial.create(newTrial)
    res.status(200).json({ msg: newTrial })
}
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;