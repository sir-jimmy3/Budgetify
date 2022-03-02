const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  res.send('Read category [GET from categories.js]')
})

router.get('/', (req, res) => {
  res.send('Read categories [GET from categories.js]')
})

router.post('/', (req, res) => {
  res.send('Create categories [POST from categories.js]')
})

router.delete('/:id', (req, res) => {
  res.send('Remove categories [DELETE from categories.js]')
})

router.put('/:id', (req, res) => {
  res.send('Update categories [PUT from categories.js]')
})

module.exports = router