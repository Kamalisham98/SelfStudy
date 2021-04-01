"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  barang.init(
    {
      nama: DataTypes.STRING,
      harga: DataTypes.DECIMAL,
      id_pemasok: DataTypes.INTEGER,
      image: {
        type: DataTypes.STRING,
        //Set custom getter for book image using URL
        get() {
          const image = this.getDataValue("images");
          return "/image/" + image;
        },
      },
    },
    {
      sequelize,
      paranoid: true, // Activate soft delete
      timestamps: false, // timestamps
      freezeTableName: true, // because we use Indonesian
      modelName: "barang",
    }
  );
  return barang;
};
