const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  res.send('Read income [GET from income.js]')
})

router.get('/', (req, res) => {
  res.send('Read incomes [GET from income.js]')
})

router.post('/', (req, res) => {
  res.send('Create income [POST from income.js]')
})

router.delete('/:id', (req, res) => {
  res.send('Remove income [DELETE from income.js]')
})

router.put('/:id', (req, res) => {
  res.send('Update income [PUT from income.js]')
})

module.exports = router