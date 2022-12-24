const router = require("express").Router();
const userRoutes = require("./UserRoutes")
const tokenRoutes = require("./tokenRoutes")

router.use("/api/users", userRoutes)
router.use("/api/tokens", tokenRoutes)

module.exports = router