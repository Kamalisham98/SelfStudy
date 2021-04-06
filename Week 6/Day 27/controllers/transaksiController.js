const { barang, pelanggan, pemasok, transaksi } = require("../models");

class TransaksiController {
  // Get all data
  async getAll(req, res) {
    try {
      let data = await transaksi.find();

      if (data.length === 0) {
        return res.status(404).json({
          message: "Data not found",
        });
      }
      return res.status(200).json({
        message: "success",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error,
      });
    }
  }
  // Get one data
  async getOne(req, res) {
    try {
      // Find one data
      let data = await transaksi.findOne({
        _id: req.params.id,
      });

      if (!data) {
        return res.status(404).json({
          message: "Transaksi not found!",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If failed
      console.log(e);
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Create data
  async create(req, res) {
    try {
      let findData = await Promise.all([
        barang.findOne({ _id: req.body.id_barang }),
        pelanggan.findOne({ _id: req.body.id_pelanggan }),
      ]);
      if (!findData[0] || !findData[1]) {
        return res.status(404).json({
          message: "barang and pelanggan not found",
        });
      }


      let total = eval(findData[0].harga*req.body.jumlah);

      let data = await transaksi.create(req.body)

      return res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Update transaksi
  async update(req, res) {
    try {
      // Update data
      let data = await transaksi.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body, // This is all of req.body
        {
          new: true,
        }
      );
      // new is to return the updated transaksi data
      // If no new, it will return the old data before updated

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Delete transaksi
  async delete(req, res) {
    try {
      // delete data
      await transaksi.delete({ _id: req.params.id });

      return res.status(200).json({
        message: "Success",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new TransaksiController();
