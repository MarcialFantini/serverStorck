const express = require('express')

const router = express.Router()

const ProductService = require('../services/productService')

const service = new ProductService

router.get('/', async (req, res, next) => {
    const products = await service.find()
    res.json(products)
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    const product = await service.findOne(id)
    res.json(product)
})

router.post('/', async (req, res, next) => {
    const body = req.body
    const newProduct = await service.create(body)
    res.json(newProduct)
})

router.patch('/:id', async (req, res, next) => {
    const { id } = req.params
    const body = req.body
    const newProduct = await service.update(id, body)
    res.json(newProduct)
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    const rta = await service.delete(id)
    res.json(rta)
})



module.exports = router