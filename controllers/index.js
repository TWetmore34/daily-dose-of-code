const homeRoutes = require('./home-route');
const loginRoutes = require('./login-routes');
const profileRoutes = require('./profile-routes')
const router = require('express').Router();


router.use('/', homeRoutes)
router.use('/', loginRoutes)
router.use('/profile', profileRoutes)

module.exports = router;