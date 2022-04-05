const express = require('express')
const routerUp = require('./routes')

const app = express()

app.use(express.json())

const port = 3000

routerUp(app)

app.get('/', (req, res, next) => {
    res.json('jea')
})

app.listen(port, (req, res, next) => {
    console.log(`server prendido en: http://localhost:${port}/`)
})