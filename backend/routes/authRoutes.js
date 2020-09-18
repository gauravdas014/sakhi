const express = require("express");
const authController = require("../controllers/authController");
const { route } = require("./userRoutes");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.signin);
router.route("/verifyToken").get(authController.verifyToken);
router.route("/logout").get(authController.signout);
router.route("/passwordReset").post(authController.resetPassword);
router.route("/setNewPassword").post(authController.setNewPassword);

module.exports = router;
