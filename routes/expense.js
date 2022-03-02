const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  res.send('Read expense [GET from expense.js]')
})

router.get('/', (req, res) => {
  res.send('Read expenses [GET from expense.js]')
})

router.post('/', (req, res) => {
  res.send('Create expense [POST from expense.js]')
})

router.delete('/:id', (req, res) => {
  res.send('Remove expense [DELETE from expense.js]')
})

router.put('/:id', (req, res) => {
  res.send('Update expense [PUT from expense.js]')
})

module.exports = router