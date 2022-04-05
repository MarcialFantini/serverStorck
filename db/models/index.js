const { Product, ProductShema } = require('./product.model')
const { Order, OrderSchema } = require('./order.model')


function setUpModels(sequelize) {
    Product.init(ProductShema, Product.config(sequelize))
    Order.init(OrderSchema, Order.config(sequelize))
}

module.exports = setUpModels