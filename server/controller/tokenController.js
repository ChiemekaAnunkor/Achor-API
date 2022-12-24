const { Token } = require("../model")

module.exports = {
    createToken: async (req, res) => {

        try {
            let tokenData = await new Token(req.body).save()
            res.status(200).json(tokenData)
        } catch (error) {
            res.status(400).json(error)
        }

    },
    getTokens: async (req, res) => {
        try {
            let tokenData = await Token.find().populate("user_id")
            res.status(200).json(tokenData)
        } catch (error) {
            res.status(400).json(error)

        }
    },
    getOneToken: async (req, res) => {
        try {
            let tokenData = await Token.find()
            res.status(200).json(tokenData)
        } catch (error) {
            res.status(400).json(error)

        }
    },

}
