const { barang, pelanggan, pemasok, transaksi } = require("../../models");
const mongoose = require("mongoose");
const { default: validator } = require("validator");

exports.getOne = async (req, res, next) => {
  // Checking parameter's validation
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      message: "Parameter is not valid, transaksi not found",
    });
  }
  next();
};

exports.create = async (req, res, next) => {
  let error = [];
  // Check barang's id
  if (!mongoose.Types.ObjectId.isValid(req.body.id_barang)) {
    error.push("id_barang is not valid");
  }
  // Check pelanggan's id
  if (!mongoose.Types.ObjectId.isValid(req.body.id_pelanggan)) {
    error.push("id_pelanggan is not valid");
  }

  // If there isn't barang or pelanggan exist
  if (error.length > 0) {
    return res.status(400).json({
      message: error.join(", "),
    });
  }

  let findData = await Promise.all([
    barang.findOne({ _id: req.body.id_barang }),
    pelanggan.findOne({ _id: req.body.id_pelanggan }),
  ]);
  // If barang not found
  if (!findData[0]) {
    error.push("barang not found");
  }
  // If pelanggan not found
  if (!findData[1]) {
    error.push("pelanggan not found");
  }
  // is jumlah numeric?
  if (!validator.isNumeric(req.body.jumlah)) {
    error.push("Jumlah must be a number");
  }

  if (error.length > 0) {
    return res.status(400).json({
      message: error.join(", "),
    });
  }
  req.body.barang = findData[0];
  req.body.pelanggan = findData[1];
  req.body.total = eval(findData[0].harga * req.body.jumlah);
  // continue (see at router)
  next();
};

exports.update = async (req, res, next) => {
  let error = [];
  if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
    error.push("id_transaksi is not valid");
  }
  if (!moongoose.Types.ObjectId.isValid(req.body.id_barang)) {
    error.push("id_barang is not valid, must be hexadecimal");
  }
  if (!moongoose.Types.ObjectId.isValid(req.body.id_pelanggan)) {
    error.push("id_pelanggan is not valid, must be hexadecimal");
  }

  if (error.length > 0) {
    return res.status(400).json({
      message: error.join(", "),
    });
  }
  let findData = await Promise.all([
    barang.findOne({ _id: req.body.id_barang }),
    pelanggan.findOne({ _id: req.body.id_pelanggan }),
    transaksi.findOne({ _id: req.params.id }),
  ]);

  // if barang not found
  if (!findData[0]) {
    errors.push("Barang not found");
  }

  // If pelanggan not found
  if (!findData[1]) {
    errors.push("Pelanggan not found");
  }

  // If transaksi not found
  if (!findData[2]) {
    errors.push("Transaksi not found");
  }

  // Check jumlah is numeric
  if (!validator.isNumeric(req.body.jumlah)) {
    errors.push("Jumlah must be a number");
  }

  // If error
  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  // Calculate total
  req.body.barang = findData[0];
  req.body.pelanggan = findData[1];
  req.body.total = eval(findData[0].harga * req.body.jumlah);

  // Go to next
  next();
};

exports.delete = async (req, res, next) => {
  let errors = [];

  // Check params is valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    errors.push(
      "id_transaksi is not valid and must be 24 character & hexadecimal"
    );
  }

  // If params error
  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  // Find one transaksi
  let data = await transaksi.findOne({ _id: req.params.id });

  // If transaksi not found
  if (!data) {
    errors.push("Transaksi not found");
  }

  // If error
  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  // Go to next
  next();
};
