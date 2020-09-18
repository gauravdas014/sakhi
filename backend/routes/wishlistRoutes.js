const express = require("express");
const wishlistController = require("../controllers/wishlistController");
const router = express.Router();

router.route("/:userId").get(wishlistController.getWishlist);
router.route("/:userId/:productId").post(wishlistController.addToWishlist);
router
  .route("/remove/:userId/:productId")
  .post(wishlistController.removeFromWishlist);

module.exports = router;
