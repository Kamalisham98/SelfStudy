'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pemasok', [{
      nama: "Khay",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nama: "Heru",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nama: "Siti",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
