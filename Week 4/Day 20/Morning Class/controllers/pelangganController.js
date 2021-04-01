const { pemasok, barang, pelanggan, transaksi } = require("../models");

class PelangganController {
  async getAll(req, res) {
    try {
      let data = await pelanggan.findAll({});
      return res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "data error",
        error: error,
      });
    }
  }

  async getOne(req, res) {
    try {
      let data = await pelanggan.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "data error",
        error: error,
      });
    }
  }

  async create(req, res) {
    try {
      let createData = await pelanggan.create({
        nama: req.body.nama,
      });
      let data = await pelanggan.findOne({
        where: { id: createData.id },
      });
      return res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "data error",
        error: error,
      });
    }
  }
}

module.exports = new PelangganController();
