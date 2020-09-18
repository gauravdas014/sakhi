const express = require("express");
const authController = require("../controllers/authController");
const { route } = require("./userRoutes");

const router = express.Router();

router.route("/signup").post( function(req,res) {authController.signup});
router.route("/login").post(function(req,res) {authController.signin});
router.route("/logout").get(function(req,res) {authController.signout});
router.route("/passwordReset").post(function(req,res) {authController.resetPassword});
router.route("/setNewPassword").post(function(req,res) {authController.setNewPassword});

module.exports = router;
