const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bcrypt = require('bcrypt')
const NodeRSA = require('node-rsa')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.set('json spaces', 2)
//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_CHAIN).then(() => {
    console.log('Conected to mongoDB')
}).catch((error) => {
    console.error(error)
})

//routes
app.use('/api/users', require('./routes/user'));
app.use('/api/businesss', require('./routes/business'));
app.use('/api/authUser', require('./routes/authUser'));
app.use('/api/authBusiness', require('./routes/authBusiness'));
app.use('/api/debts', require('./routes/debt'));
app.use('/api/reniecBDs', require('./routes/reniecBD'));
app.use('/api/debtBs', require('./routes/debtB'));
app.use('/api/debtPs', require('./routes/debtP'));
app.use('/api/tributes', require('./routes/tribute'));

app.listen(port, () => {
    console.log('listening on port: ', port)
})