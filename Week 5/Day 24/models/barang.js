const mongoose = require("mongoose"); // Import mongoose
const mongooseDelete = require("mongoose-delete");

const BarangSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      unique: true,
      required: true, // NOT NULL
    },
    harga: {
      type: Number,
      required: true,
    },
    pemasok: {
      type: mongoose.Schema.ObjectId,
      ref: "pemasok",
      required: true,
    },
    image: {
      type: String,
      default: null,
      get: getImage,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

function getImage(image) {
  return `/images/${image}`;
}

//Enable soft delete
BarangSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('barang', BarangSchema, 'barang'); // Export barang models
