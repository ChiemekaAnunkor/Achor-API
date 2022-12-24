require("dotenv").config()
//import depenedencies and files 
const { User, Token } = require("../model")
const { createToken, getOneToken } = require("./tokenController")
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN
const { generateApiKey } = require('generate-api-key');
const axios = require("axios")

//user endpoint
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
            let accesskey = userData.access_token_id.api_key
            //great a session using jwt, creats a token to be sent to the front end.
            const token = jwt.sign({ email: emailExists, firstName: nameExist, lastName: lastExist, apiKey: accesskey }, secret, { expiresIn: "1h" });


            res.status(200).json({ token })
        } catch (error) {
            res.status(400).json({ error, message: "does not exist, Email or Password is incorrect" })


        }
    },
    signUp: async (req, res) => {
        try {
            let apikey = generateApiKey({ min: 30 })
            //create api key
            let creatApiData = await new Token({ api_key: apikey }).save()
            //retirve api key
            let apiData = await Token.findOne({ api_key: apikey }).populate("user_id")
            let accessTokenId = apiData.id

            const { first_name, last_name, email, password } = req.body
            let userData = await new User({ first_name: first_name, last_name: last_name, email: email, password: password, access_token_id: accessTokenId }).save()

            res.status(200).json(userData)

        } catch (error) {
            res.status(400).json(error)

        }
    },


}

