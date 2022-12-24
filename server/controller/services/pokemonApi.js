//national park service api

require("dotenv").config()
const axios = require("axios")
const { Token } = require("../../model")

module.exports = {
    GetAllPokemon: async (req, res) => {

        try {


            let { api_key } = req.query
            let compareApi = await Token.findOne({ api_key })
            if (compareApi) {

                axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then((data) => {
                    let pokemonData = data
                    res.status(200).json(pokemonData)

                }).catch((err) => {
                    console.log(err)

                });
                // res.json(compareApi)
            } else {
                res.status(200).json({ Error: "Bad Request", err: { Message: "NO API KEY FOUND WITH REQUEST", res: { resolve: "Create an account to get api key  acess" } } })
            }
        } catch (error) {
            res.status(400).json({ error, Message: "bad request" })
        }

    }
}

