const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/passwordReset").post(authController.resetPassword);
router.route("/setNewPassword").post(authController.setNewPassword);

module.exports = router;
