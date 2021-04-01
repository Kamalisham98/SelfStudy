const { pemasok, barang, pelanggan, transaksi } = require("../models");

class TransaksiController {
  async getAll(req, res) {
    try {
      let data = await transaksi.findAll({
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
        include: [
        //   // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
        //     include: [
        //       // Include is join
        //       { model: pemasok, attributes: ["nama"] },
        //     ],
          },
        //   {
        //     model: pelanggan,
        //     attributes: ["nama"], // just this attrubute from Pelanggan that showed
        //   },
        ],
      });
      return res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "data error",
        error: error,
      });
    }
  }
}

module.exports = new TransaksiController();
