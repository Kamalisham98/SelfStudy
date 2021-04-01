const { barang, pelanggan, pemasok, transaksi } = require("../models");

class TransaksiController {
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
}


module.exports = new TransaksiController;