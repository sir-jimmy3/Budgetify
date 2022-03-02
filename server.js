const express = require('express')
const accountRouter = require('./routes/account')
const authenticationRouter = require('./routes/authentication')
const authorizationRouter = require('./routes/authorization')
const categoriesRouter = require('./routes/categories')
const expenseRouter = require('./routes/expense')
const incomeRouter = require('./routes/income')
const logoutRouter = require('./routes/logout')
const languageRouter = require('./routes/set-language')

const app = express()
app.use(express.json())

app.use('/account', accountRouter)
app.use('/authentication', authenticationRouter)
app.use('/authorization', authorizationRouter)
app.use('/categories', categoriesRouter)
app.use('/expense', expenseRouter)
app.use('/income', incomeRouter)
app.use('/logout', logoutRouter)
app.use('/language', languageRouter)




app.listen(3000, () => console.log('Server is up on http://localhost:3000'))