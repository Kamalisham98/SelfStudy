const express = require("express");
const router = express.Router();
const HelloController = require("../controller/helloController");

router.get("/:name", HelloController.get);
router.post("/:name", HelloController.post);
router.put("/:name", HelloController.put);
router.delete("/:name", HelloController.delete);

module.exports = router;
