const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const router = require('./routes/contactRoutes')
const routerUser = require('./routes/userRoutes')
const { json } = require('express')
const ErrorHandler = require('./middleware/errorHandler')

const connectDb = require('./config/dbConnection')

connectDb()

// dontenv.config()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use('/api/contacts', router)
app.use('/api/users', routerUser)

app.use(ErrorHandler)


app.listen(PORT, () => {console.log(`Servior está rodando na porta ${PORT}`)})

