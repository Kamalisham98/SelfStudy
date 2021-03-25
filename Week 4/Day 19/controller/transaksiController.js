// Import mysql connection
const mysql = require("../models");

//get All data from transaksi
const getAll = (req, res) => {
  let sql =
    "SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id";
  mysql.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Sever Error",
        error: err,
      });
    }
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  });
};

const create = (req, res) => {
  // Find Price of barang
  let sqlFindBarang = "SELECT * FROM barang WHERE id = ?";

  //Run sqlFindBarang
  mysql.query(sqlFindBarang, [req.body.id_barang], (err, result) => {
    let price = eval(result[0].harga);
    let total = eval(req.body.jumlah * price);

    let sqlCreate =
      "INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES (?,?,?,?)";

    mysql.query(
      sqlCreate,
      [req.body.id_barang, req.body.id_pelanggan, req.body.jumlah, total],
      (err, result) => {
        // if error
        if (err) {
          return res.status(500).json({
            message: "Internal Sever Error",
            error: err,
          });
        }
        //  if success
        let sqlSelect = `SELECT * FROM transaksi t JOIN barang b on t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan =p.id  WHERE t.id = ${result.insertId}`;

        mysql.query(sqlSelect, (err, result) => {
          // if Error
          if (err) {
            return res.status(500).json({
              message: "Internal Sever Error",
              error: err,
            });
          }
          return res.status(200).json({
            message: "Success",
            data: result[0],
          });
        });
      }
    );
  });
};

const deleteData = (req, res) => {
  let sqlDelete = "DELETE FROM transaksi WHERE id = ?";

  mysql.query(sqlDelete, [req.params.id], (err, result) => {
    // if error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // if success
    return res.status(200).json({
      message: "Success",
    });
  });
};

const update = (req, res) => {
  // Find Barang
  let sqlFindBarang = "SELECT * FROM barang WHERE id = ? ";
  // Run Find query
  mysql.query(sqlFindBarang, [req.body.id_barang], (err, result) => {
    let price = eval(result[0].harga);
    let total = eval(req.body.id_barang * price);

    //Declare update
    let sqlUpdate =
      "Update transaksi SET id_barang = ?, jumlah = ?, total = ? WHERE id = ?";

    mysql.query(
      sqlUpdate,
      [req.body.id_barang, req.body.jumlah, total, req.params.id],
      (err, result) => {
        //if error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        }
        //if success
        return res.status(200).json({
          message: "Success",
          data: result,
        });
      }
    );
  });
};

module.exports = { getAll, create, deleteData, update }; // Export getAll function
