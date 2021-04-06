const express = require("express");

// Import Controller
const TransaksiController = require("../controllers/transaksiController");

// Import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// To use routes
const router = express.Router();

router.get("/", TransaksiController.getAll);
router.get("/:id", transaksiValidator.getOne, TransaksiController.getOne);
router.post("/", transaksiValidator.create, TransaksiController.create);
router.put("/:id", transaksiValidator.update, TransaksiController.update);


module.exports = router;
