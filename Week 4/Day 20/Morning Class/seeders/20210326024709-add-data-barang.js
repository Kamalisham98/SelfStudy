"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("barang", [
      {
        nama: "Pepsodent",
        harga: 14500,
        id_pemasok: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Lifeboy",
        harga: 24600,
        id_pemasok: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Clear",
        harga: 44500,
        id_pemasok: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("barang", null, {});
  },
};
