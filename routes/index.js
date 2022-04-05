const express = require('express')
const productsRouter = require('./productsRoutes')
const orderRouter = require('./ordersRoutes')

const routerUp = (app) => {
    const routerV1 = express.Router()

    app.use('/api/v1', routerV1)

    routerV1.use('/products', productsRouter)
    routerV1.use('/orders', orderRouter)
}

module.exports = routerUp