const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()

const route = require('./routes/routes')

require('./db')();

app.use(cors())

app.use(bodyParser.json())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', route)

app.listen(8080, console.log("Listening"))