const router = require("express").Router();
const { createToken, getTokens } = require("../controller/tokenController")


router.route("/").get(getTokens).post(createToken);




module.exports = router