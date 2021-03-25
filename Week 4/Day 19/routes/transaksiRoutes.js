const express = require("express");
const router = express.Router();

// Import controller
const transaksiController = require("../controller/transaksiController");
// Define routes
router.get("/", transaksiController.getAll);
router.post("/", transaksiController.create);
router.delete("/:id", transaksiController.deleteData);
router.put("/:id", transaksiController.update);

module.exports = router; // export router
