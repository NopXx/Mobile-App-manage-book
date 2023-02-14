const express = require('express')
require('dotenv').config()
const router = express.Router()
const db = require('../lib/db.js')

router.get('/books', (req, res) => {
    db.query('select * from tb_book', (err, data) => {
        if (err) {
            return res.status(401).send(err)
        } else {
            return res.status(200).send(data)
        }
    })
})

module.exports = router