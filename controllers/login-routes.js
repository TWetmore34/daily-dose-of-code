const router = require("express").Router();
// /
// add loggedInAuth once login/create is set up
router.get("/", (req, res) => {
  try {
    res.render("login", { layout: "main" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
