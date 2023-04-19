const express = require("express")
const bodyparser = require("body-parser")
require("dotenv").config()

const app = express()
const sqlite3 = require("sqlite3")
const db = new sqlite3.Database('./db/Star_wars_swapi.db')

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())



app.get('/', (req, res) => {
    console.log(req.query)
})

app.get('./planets', (res, req) => {



    db.each("SELECT = FROM planets", (err, planets) => {
        planets.push({ ...planets, residents: [] })
        res.json(planets)
    })

    db.all(`SELECT id FROM planets WHERE homeworld=${planets.id}`)
})

app.get('/people/:id', (req, res) => {
    const peopleId = req.params.id
    db.all(`SELECT = FROM people where id=${peopleId}`, (err, people) => {
        res.json(people[0])
    })
})










app.listen(process.env.PORT, () => {
    console.log("Запущен сервер на порту 3000")
})