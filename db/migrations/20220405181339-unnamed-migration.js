'use strict';

const { ORDER_TABLE, OrderSchema } = require("../models/order.model");

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema)
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
