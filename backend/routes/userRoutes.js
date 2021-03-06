const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// router.route("/:email").get(userController.me);
router.route("/user/:userId").get(userController.read);
router.route("/user/:userId").put(userController.update);
router.route("/orders/by/user/:userId").get(userController.purchaseHistory);

router.param("userId", userController.userById);

// router.route("/sell/product").get()

module.exports = router;
