const express = require("express");
const router = express.Router();

// Import controller
const PelangganController = require("../controllers/pelangganController");

router.get("/", PelangganController.getAll);
router.get("/:id", PelangganController.getOne);
router.post("/", PelangganController.create)

module.exports = router;
