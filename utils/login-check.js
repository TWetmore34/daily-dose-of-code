const loginAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/')
    } else {
        next()
    }
};

const loggedInAuth = (req, res, next) => {
    if(req.session.logged_in){
        res.redirect('/home')
    } else {
        next();
    }
}

module.exports = { loginAuth, loggedInAuth };