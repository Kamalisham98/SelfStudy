const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: 'arif',
    database: "penjualan"
});

module.exports = connection; //Export connection