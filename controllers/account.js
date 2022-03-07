const accounts = require('../models/account')
const expenses = require('../models/expense')

function accountById(userId, id){
    const result = accounts.find((account) => {
        if (id == account.id && userId == account.userId) {
            return true
        }
    })
    return result
}

function getAccount(req, res) {
    const account = accountById(req.params.userId, req.params.id)
    if (!account) {
        res.status(401).send('No account found!')
    } else res.status(200).send(account)
}

function getAvailableSum(req, res) {
    const {userId, id} = req.params
    const account = accountById(userId, id)
    if (!account) {
        res.status(401).send('No account found!')
    } else {
        let expenseSum = 0
        expenses.map(expense => {
            if (expense.accountId == id) {
                expenseSum += expense.amount
            }
        })
        const sum = account.income - expenseSum
        res.status(200).send({
            "Available sum": sum
        })
    }
}

function createAccount(req, res) {
    //TODO improve after after database 
    const newAccount = req.body
    accounts.push(newAccount)
    res.send(newAccount)
}

function deleteAccount(req, res) {
    //TODO improve after adding database
    accounts = accounts.filter((account) => account.id != req.params.id)
    res.send('Account deleted')
}

function updateAccount(req, res) {
    //TODO improve after adding database
    res.send('Account updated!')
}

module.exports = {
    getAccount,
    getAvailableSum,
    createAccount,
    deleteAccount,
    updateAccount
}