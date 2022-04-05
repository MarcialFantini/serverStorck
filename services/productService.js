const { models } = require('./../lib/sequelize')


class ProductService {
    constructor() { }

    async find() {

        const productos = await models.product.findAll()


        return productos
    }

    async findOne(id) {
        const producto = await models.product.findByPk(id)
        return producto
    }

    async create(data) {

        const newProducto = await models.product.create(data)
        return newProducto
    }
    async update(id, body) {
        const producto = await this.findOne(id)
        const rta = await producto.update(body)
        return rta
    }

    async delete(id) {
        const producto = await this.findOne(id)
        await producto.destroy()
        return { id }
    }
}

module.exports = ProductService