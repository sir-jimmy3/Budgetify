const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send('Set language')
})

module.exports = router