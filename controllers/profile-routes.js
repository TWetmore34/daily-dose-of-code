const router = require("express").Router();
const { User, Trial } = require("../models");
// /profile
router.get("/", async (req, res) => {
  try {
    // grabs the currently logged in user
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
    });

    const inProgressTrials = await Trial.findAll({
      where: { user_id: req.session.user_id, status: false },
      raw: true,
    });

    const successfulTrials = await Trial.findAll({
      where: { user_id: req.session.user_id, status: true },
      raw: true,
    });

    //  serializes user data
    const user = await userData.get({ plain: true });

    res.render("profile", {
      user,
      inProgressTrials,
      successfulTrials,
      loggedIn: req.session.logged_in,
      streak: req.session.streak || 0,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profileTrials", async (req, res) => {
  try {
    const profileTrials = await Trial.findAll({
      where: { user_id: 3 },
    });
    res.status(200).json({ msg: profileTrials });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
