const express = require("express");
const cors = require("cors")

const db = require("./config/configDB")
const dotenv = require("dotenv")
dotenv.config()
const routes = require("./routes")

const app = express()
// app.use(cors)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("It works")
})

app.use(routes)
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);

    })
})

