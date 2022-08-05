const router = require("express").Router();
const userRoutes = require("./user-routes");
const trialRoutes = require("./trial-routes");

router.use("/users", userRoutes);
router.use("/trial", trialRoutes);

module.exports = router;
