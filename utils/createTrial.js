const { Trial } = require('../models')
const createTrial = async (req, res, next) => {
    const newTrial = {
        user_id: req.session.user_id,
        challenge_id: req.params.id,
        submission_detail: 'testing',
        status: false
    }
    await Trial.create(newTrial)
    next()
}

module.exports = createTrial