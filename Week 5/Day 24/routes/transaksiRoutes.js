const express = require("express");


const TransaksiController = require("../controllers/transaksiController")

const router = express.Router();

router.get("/", TransaksiController.getAll);

module.exports = router;