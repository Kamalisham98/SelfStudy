const mysql = require("mysql2");

//make mysql connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'arif',
    database:'penjualan'
});

module.exports =connection;