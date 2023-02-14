const express = require('express')
require('dotenv').config()
const router = express.Router()
const db = require('../lib/db.js')

router.get('/books', (req, res) => {
  const search = req.query.search
  db.query(
    `select * from tb_book`,
    (err, data) => {
      if (err) {
        return res.status(401).send(err)
      } else {
        return res.status(200).send(data)
      }
    }
  )
})
router.get('/books/search', (req, res) => {
  const search = req.query.value
  db.query(
    `select * from tb_book where b_id like '%${search}%' or b_name like '%${search}%' or b_writer like '%${search}%' or b_price like '%${search}%'`,
    (err, data) => {
      if (err) {
        return res.status(401).send(err)
      } else {
        return res.status(200).send(data)
      }
    }
  )
})
router.get('/book', (req, res) => {
  const table = req.query.table
  const value = req.query.value
  db.query(
    `select * from tb_book where ${table} like '%${value}%'`,
    (err, data) => {
      if (err) {
        return res.status(401).send(err)
      } else {
        return res.status(200).send(data)
      }
    }
  )
})

module.exports = router
