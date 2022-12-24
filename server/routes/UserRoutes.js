const router = require("express").Router();
const { getUser, createUser, signIn } = require("../controller/userController")


router.route("/").get(getUser).post(createUser);

router.route("/signin").post(signIn)


module.exports = router