// Import mysql connection
const mysql = require("../models");
//get All data from transaksi

const getAll = (req,res)=>{
    let sql = "SELECT * FROM transaksi t JOIN barang b on t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan =p.id";
    mysql.query(sql,(err,result)=>{
        if (err){
            return res.status(500).json({
                message: "Internal Sever Error",
                error:err,
            });
        }
        return res.status(200).json({
            message:"Success",
            data: result,
        });
    });
}

module.exports = { getAll}; // Export getAll function