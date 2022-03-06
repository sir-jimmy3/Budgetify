const express = require('express')
const router = express.Router()
const user = require('../models/user');

function getById(id) {
  const accounts = user[0].accounts
  const accountById = accounts.filter((account) => account.id == id)
  return accountById
}


router.get('/:id', (req, res, next) => {
  const account = getById(req.params.id);
  if (!account[0]) {
    res.status(404).send("No account with this ID")
    return next()
  }
  res.send(account[0])
})

router.get('/', (req, res) => {
  const accounts = user[0].accounts
  res.send(accounts);
})

router.get('/available_sum/:id', (req, res) => {
  const account = getById(req.params.id)
  const income = account[0].income
  const expenses = account[0].expenses
  let sum = 0
  expenses.map((expense) => {
    sum += expense.amount
  })

  const availableSum = income - sum

  res.send({
    "available sum": availableSum
  })
})

router.post('/', (req, res) => {
  const newAccount = req.body
  user.push(newAccount)
  res.send(newAccount)
})

router.delete('/:id', (req, res, next) => {
  const account = getById(req.params.id)
  if (!account[0]) {
    res.status(404).send("No account with this ID")
    return next()
  }
  user[0].accounts = user[0].accounts.filter(account => account.id == req.params.id)
  res.send(account[0])
})

router.put('/:id', (req, res) => {
  const account = getById(req.params.id)
  account[0] = {
    ...account[0],
    income: req.body.income 
  }
  res.send(account[0])
})

module.exports = router