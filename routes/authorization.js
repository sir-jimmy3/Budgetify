const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send('Authorize user [POST from authorization.js]')
})

module.exports = router