const homeRoutes = require('./home-route');
const loginRoutes = require('./login-routes');
const profileRoutes = require('./profile-routes');
const apiRoutes = require('./api');
const router = require('express').Router();

// handles api requests
router.use('/api', apiRoutes)

// handles home routes
router.use('/home', homeRoutes)

// login routes
router.use('/', loginRoutes)

// prfolie routes
router.use('/profile', profileRoutes)

module.exports = router;