const homeRoutes = require('./home-route');
const loginRoutes = require('./login-routes');
const profileRoutes = require('./profile-routes')
const apiRoutes = require('./api')
const router = require('express').Router();

router.use('/api', apiRoutes)
router.use('/', homeRoutes)
router.use('/', loginRoutes)
router.use('/profile', profileRoutes)

module.exports = router;