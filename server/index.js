
require('dotenv').config()
var cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(cors())

app.use(express.json())

const buyersRouter = require('./routes/buyerRouter')
app.use('/buyers', buyersRouter)


const storeItemsRouter = require('./routes/itemRouter')
app.use('/storeItems', storeItemsRouter)

app.listen(4000, () => console.log('Server Started'))