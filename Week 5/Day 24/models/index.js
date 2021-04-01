const mongoose = require("mongoose"); // Import mongoose

const uri = process.env.MONGO_URI; // Add URL MongoDB Atlas

// Connect express to mongoDB with mongoose
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true, // use to make unique data type
    useFindAndModify: false, //use findOneAndUpdate instead of FindAndModify
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Import models
const barang = require("./barang");
const pelanggan = require("./pelanggan");
const pemasok = require("./pemasok");
const transaksi = require("./transaksi");

module.exports = { barang, pelanggan, pemasok, transaksi };
