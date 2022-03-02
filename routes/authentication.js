const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send('Authenticate user [POST from authentication.js]')
})

module.exports = router