const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  res.send('Read account [GET from account.js]')
})

router.get('/', (req, res) => {
  res.send('Read accounts [GET from account.js]')
})

router.get('/available_sum/:id', (req, res) => {
  res.send('Accounts available sum')
})

router.post('/', (req, res) => {
  res.send('Create account [POST from account.js]')
})

router.delete('/:id', (req, res) => {
  res.send('Remove account [DELETE from account.js]')
})

router.put('/:id', (req, res) => {
  res.send('Update account [PUT from account.js]')
})

module.exports = router