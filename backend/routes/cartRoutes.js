const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.route("/:userId").get(cartController.getAllProductsInCart);

// router.route("/:userId/:productId").get(cartController.getSingleProductInCart);

router.route("/:userId/productId").post(cartController.addToCart);

// router
//   .route("/:userId/:productId")
//   .post(cartController.updateSingleProductInCart);

// router
//   .route("/:userId/remove/:product")
//   .post(cartController.removeProductFromCart);

module.exports = router;
