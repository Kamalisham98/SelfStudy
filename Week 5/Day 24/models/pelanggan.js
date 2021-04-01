const mongoose = require("mongoose"); // Import mongoose
const mongooseDelete = require("mongoose-delete");

const PelangganSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true, // NOT NULL
    },
    photo:{
        type: String,
        require: false,
        default:null,
        get: getPhoto,
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

function getPhoto(image) {
  return `/images/${image}`;
}

//Enable soft delete
PelangganSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('pelanggan', PelangganSchema, 'pelanggan'); // Export barang models
