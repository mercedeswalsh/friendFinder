// needs express & path

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const hroutes = require('./routes/htmlRoutes.js')
const aroutes = require('./routes/apiRoutes.js')

hroutes(app)
aroutes(app)

app.listen(process.env.PORT || 3000)