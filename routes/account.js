const express = require('express')
const { getAccount, getAvailableSum, createAccount, deleteAccount, updateAccount } = require('../controllers/account')

const router = express.Router()

router.get('/:userId/:id', getAccount)

router.get('/available_sum/:userId/:id', getAvailableSum)

router.post('/', createAccount)

router.delete('/:id', deleteAccount)

router.put('/:id', updateAccount)

module.exports = router