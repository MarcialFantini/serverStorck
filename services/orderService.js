const { models } = require('../lib/sequelize')

class OrderService {
    async find() {
        const orders = await models.Order.findAll()
        return orders
    }
    async findOne(id) {
        const order1 = await models.Order.findByPk(id)
        return order1
    }
    async create(data) {
        const newOrder = await models.Order.create(data)
        return newOrder
    }
    async update(id, data) {
        const order = await this.findOne(id)
        const updateOrder = await order.update(data)
        return updateOrder
    }
    async delete(id) {
        try {
            const orderDelete = await models.Order.findByPk(id)

            await orderDelete.destroy()
            return { id }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = OrderService