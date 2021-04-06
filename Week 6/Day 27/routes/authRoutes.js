const express = require("express");
const { authenticate } = require("passport");
const passport = require("passport");

// Import validator

//import controller
const authController = require("../controllers/authController");

//import auth (middleware)
const auth = require("../middlewares/auth");

//make router
const router = express.Router();

router.post("/signup", auth.signup, authController.getToken);
router.post("/signin", auth.signin, authController.getToken);

module.exports = router;
