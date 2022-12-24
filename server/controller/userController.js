const { User } = require("../model")
const jwt = require('jsonwebtoken');
require("dotenv").config()
const secret = process.env.SECRET_TOKEN
const decode = require("jwt-decode")

module.exports = {
    createUser: async (req, res) => {

        try {
            let userData = await new User(req.body).save()
            res.status(200).json(userData)
        } catch (error) {
            res.status(400).json({ error, message: "Bad request check body" })
            console.log(error)
        }


    },
    getUser: async (req, res) => {
        try {
            let userData = await User.find().populate("access_token_id")
            res.status(200).json(userData)
        } catch (error) {
            res.status(400).json(error)


        }
    },
    signIn: async (req, res) => {
        const { email, password } = req.body
        try {
            let userData = await User.findOne({ email, password }).populate("access_token_id")
            let emailExists = userData.email
            let nameExist = userData.first_name
            let lastExist = userData.last_name
            let accesskey = userData.access_token_id.access_token


            const token = jwt.sign({ email: emailExists, firstName: nameExist, lastName: lastExist, apiKey: accesskey }, secret, { expiresIn: "1h" });


            res.status(200).json({ userData, token })
        } catch (error) {
            res.status(400).json({ error, message: "does not exist, Email or Password is incorrect" })


        }
    },

}
