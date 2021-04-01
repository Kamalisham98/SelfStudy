const express = require("express");

// IMport controller
const TransaksiController = require("../controllers/transaksiController");
// Make router
const router = express.Router();
// Get all data
router.get("/", TransaksiController.getAll);
router.get("/:id", TransaksiController.getOne);
module.exports = router;

// ------------------------------------------------------------

// const express = require("express"); // Import express

// // Import validator
// const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// // Import controller
// const transaksiController = require("../controllers/transaksiController");

// // Make router
// const router = express.Router();

// // Get All Data
// router.get("/", transaksiController.getAll);

// // Create data
// router.post("/", transaksiValidator.create, transaksiController.create);

// // Get One Data
// router.get("/:id", transaksiController.getOne);

// // Update Data
// router.put("/:id", transaksiValidator.update, transaksiController.update);

// // Delete One Data
// router.delete("/:id", transaksiController.delete);

// // Export router
// module.exports = router;
