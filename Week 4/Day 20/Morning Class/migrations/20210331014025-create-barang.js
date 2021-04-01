"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("barang", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
      },
      harga: {
        type: Sequelize.DECIMAL,
      },
      id_pemasok: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleteAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("barang", {
      fields: ["id_pemasok"],
      type: "foreign key",
      name: "custom_fkey_id_pemasok",
      references: {
        //Required field
        table: "pemasok",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("barang");
  },
};
