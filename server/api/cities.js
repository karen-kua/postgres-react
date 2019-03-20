const express = require("express")
const Cities = require("../models/cities")

const router = express.Router()

router.get("/", (req, res) => {
    Cities.retrieveAll((err, cities) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(cities)
        }
    })
})

router.post("/", (req, res) => {
    const city = req.body.city
    Cities.insert(city, (err, res) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(res)
        }
    })
})

module.exports = router