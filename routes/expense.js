const express = require('express')
const {getExpense, createExpense, deleteExpense, updateExpense} = require('../controllers/expense')
const router = express.Router()

router.get('/:id', getExpense)

router.post('/', createExpense)

router.delete('/:id', deleteExpense)

router.put('/:id', updateExpense)

module.exports = router