const express = require("express");
const router = express.Router();

// Import controller
const transaksiController = require("../controller/transaksiController");
// Define routes
router.get("/", transaksiController.getAll);
router.post("/", transaksiController.create);

module.exports = router; // export router
