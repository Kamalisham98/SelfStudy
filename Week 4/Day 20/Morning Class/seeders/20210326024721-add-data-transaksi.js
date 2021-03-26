"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("transaksi", [
      {
        id_barang: 25,
        id_pelanggan: 4,
        jumlah: 1,
        total: 14500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_barang: 26,
        id_pelanggan: 5,
        jumlah: 2,
        total: 49200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_barang: 27,
        id_pelanggan: 6,
        jumlah: 3,
        total: 133500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("transaksi", null, {});
  },
};
