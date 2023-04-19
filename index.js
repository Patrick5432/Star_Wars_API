const express = require("express")
const bodyparser = require("body-parser")
require("dotenv").config()

const app = express()

app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json())



app.get('/', (req, res) => {
    console.log(req.query)
})


app.listen(process.env.PORT, () => {
    console.log("Запущен сервер на порту 3000")
})