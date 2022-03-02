const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send('Log out [POST from logout.js]')
})

module.exports = router