const express = require("express");
const router = express.Router();

//Import Controller
const PelangganController = require("../controllers/pelangganController");

//Import Validator
const pelangganValidator = require("../middlewares/validators/pelangganValidator")

router.get("/", PelangganController.getAll);
router.get("/:id", PelangganController.getOne);
router.post("/", pelangganValidator.create,PelangganController.create);
router.put("/:id", PelangganController.update);
router.delete("/:id", PelangganController.delete);
module.exports = router;
