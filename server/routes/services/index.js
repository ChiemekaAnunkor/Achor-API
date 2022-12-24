const router = require("express").Router();
const { getWeather } = require("../../controller/services/weatherApi")
const { getPinterestApi } = require("../../controller/services/pinterestApi")
const { GetAllPokemon } = require("../../controller/services/pokemonApi")


router.get("/weather", getWeather)
router.get("/pinterest", getPinterestApi)
router.get("/pokemon", GetAllPokemon)


module.exports = router