const mongoose = require("mongoose"); // Import mongoose
const mongooseDelete = require("mongoose-delete");

const PemasokSchema = new mongoose.Schema(
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
PemasokSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('pemasok', PemasokSchema, 'pemasok'); // Export barang models
