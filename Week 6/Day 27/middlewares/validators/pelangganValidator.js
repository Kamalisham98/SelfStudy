const mongoose = require("mongoose");
const validator = require("validator");
const { barang, pelanggan, pemasok, transaksi } = require("../../models");

exports.getOne = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({
      message:
        "id_transaksi is not valid and must be 24 character & hexadecimal",
    });
  }
  next();
};
exports.create = async (req, res, next) => {
  // Initialita
  let errors = [];

  // Check id_pelanggan
  if (!validator.isAlpha(validator.blacklist(req.body.nama, " "))) {
    error.push("Name must be an Alphabet ");
  }
  if (validator.isEmpty(req.body.nama)) {
    errors.push("Nama is Empty!");
  }

  // If errors length > 0, it will make errors message
  if (errors.length > 0) {
    // Because bad request
    return res.status(400).json({
      message: errors.join(", "),
    });
  }
  req.body.nama = req.body.nama;
  req.body.photo = req.body.image;
  // It means that will be go to the next middleware
  next();
};
exports.update = async (req, res, next) => {
  // Initialita
  let errors = [];

  // Check id_pelanggan
  if (!validator.isAlpha(validator.blacklist(req.body.nama, " "))) {
    error.push("Name must be an Alphabet ");
  }
  if (validator.isEmpty(req.body.nama)) {
    errors.push("Nama is Empty!");
  }

  // If errors length > 0, it will make errors message
  if (errors.length > 0) {
    // Because bad request
    return res.status(400).json({
      message: errors.join(", "),
    });
  }
  req.body.nama = req.body.nama;
  req.body.photo = req.body.image;
  // It means that will be go to the next middleware
  next();
};
exports.delete = async (req, res, next) => {
  let errors = [];

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    errors.push(
      "id_transaksi is not valid and must be 24 character & hexadecimal"
    );
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  let data = await pelanggan.findOne({ _id: req.params.id });

  if (!data) {
    errors.push("Transaksi not found");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  next();
};
