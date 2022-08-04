const streaksCheck = (req, res, next) => {
    // grab info for when cookie resets
    let userId = req.session.user_id
    let loggedIn = req.session.logged_in
    let streak = req.session.streak || 0
    console.log(userId)
    console.log(loggedIn)
    // grab expiration date and current date
    const expired = req.session.cookie._expires
    const now = new Date()

    // if hasStreak hasnt been set yet this session, check if cookie is expired
    if(!req.session.hasStreak) {
    if(expired.getDate() > now.getDate() && expired.getMonth() >= now.getMonth()){
        req.session.regenerate(err => {
            if(err) throw err
        });
        streak++
        req.session.save(() => {
            req.session.user_id = userId;
            req.session.logged_in = loggedIn;
            req.session.streak = streak;
            req.session.hasStreak = true;
        })
    } else {
        req.session.regenerate(err => {
            if(err) throw err
        });
        req.session.save(() => {
            req.session.user_id = userId;
            req.session.logged_in = loggedIn;
            req.session.streak = 0;
            req.session.hasStreak = true
        })
    }
}
console.log(req.session)
// delete when done testing
next()

}

module.exports = streaksCheck