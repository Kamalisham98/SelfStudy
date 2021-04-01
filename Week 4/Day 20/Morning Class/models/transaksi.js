"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaksi.init(
    {
      id_barang: DataTypes.INTEGER,
      id_pelanggan: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
    },
    {
      sequelize,
      paranoid: true, // Activate soft delete
      timestamps: false, // timestamps
      freezeTableName: true, // because we use Indonesian
      modelName: "transaksi",
    }
  );
  return transaksi;
};
