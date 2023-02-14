const express = require('express')
require('dotenv').config()
const router = express.Router()
const db = require('../lib/db.js')

module.exports = router