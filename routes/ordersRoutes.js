const express = require('express')
const OrderService = require('../services/orderService')

const router = express.Router()

const service = new OrderService

router.get('/', async (req, res, next) => {
    const orders = await service.find()
    res.json(orders)
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    const order = await service.findOne(id)
    res.json(order)
})

router.post('/', async (req, res, next) => {
    const body = req.body
    const newProduct = await service.create(body)
    res.json(newProduct)
})

router.patch('/:id', async (req, res, next) => {
    const body = req.body
    const { id } = req.params
    const updateOrder = await service.update(id, body)
    res.json(updateOrder)
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    const idDelete = await service.delete(id)
    res.json(idDelete)
})


module.exports = router