//TODO improve after adding database

function getExpense(req, res) {
    res.send('Expense by id')
}

function createExpense(req, res) {
    res.send('New Expense created')
}

function deleteExpense(req, res) {
    res.send('Deleted the expense')
}

function updateExpense(req, res) {
    res.send('Update expense')
}

module.exports = {
    getExpense,
    createExpense,
    deleteExpense,
    updateExpense
}