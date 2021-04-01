const express = require("express");
const transaksiController = require("../controllers/transaksiController");
const router = express.Router();

// Import controller
const TransaksiController = require("../controllers/transaksiController");

router.get("/", transaksiController.getAll);

module.exports = router;
