const { User } = require("../model")

module.exports = {
    createUser: async (req, res) => {

        try {
            let userData = await new User(req.body).save()
            res.status(200).json(userData)
        } catch (error) {
            res.status(400).json(error)
        }

    },
    getUser: async (req, res) => {
        try {
            let userData = await User.find()
            res.status(200).json(userData)
        } catch (error) {
            res.status(400).json(error)

        }
    },
    getOneUser: async (req, res) => {
        try {
            let userData = await User.find()
            res.status(200).json(userData)
        } catch (error) {
            res.status(400).json(error)

        }
    },

}
