'use strict';
const { PRODUCT_TABLE, ProductShema } = require('../models/product.model')

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(PRODUCT_TABLE, ProductShema)
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCT_TABLE)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
