const { Model, DataTypes, Sequelize } = require('sequelize')

const ORDER_TABLE = 'order';

const OrderSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    destinatario: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    valorTotal: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    listProducts: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.JSON)
    }

}

class Order extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = { ORDER_TABLE, OrderSchema, Order }