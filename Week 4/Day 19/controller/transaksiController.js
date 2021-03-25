// Import mysql connection
const connection = require("../models");
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

const create = (req, res) => {
    // Find Price of barang
    let sqlFindBarang = 'SELECT * FROM barang WHERE id = ?';

    //Run sqlFindBarang 
    mysql.query(sqlFindBarang, [req.body.id_barang], (err,result)=>{
        let price = eval(result[0].harga);
        let total = eval(req.body.jumlah * price);

        let sqlCreate = 
        "INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES (?,?,?,?)";

        mysql.query(sqlCreate,
            [req.body.id_barang, req.body.id_pelanggan, req.body.jumlah, total],
            (err,result) =>{
                if(err){
                return res.status(500).json({
                    message:"Internal Sever Error",
                    error: err,
                });
                }
                return res.status(200).json({
                    message:"Success",
                    data: result,
                });
            }
        );
        
    });



}


module.exports =  {getAll, create}; // Export getAll function