const Wishlist = require("../models/wishlistModel");

exports.getWishlist = async (req, res) => {
  try {
    const wishlists = await Wishlist.find({
      user: req.params.userId,
      isDeleted: false,
    });
    res.status(200).json({
      status: "success",
      wishlists,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create({
      user: req.params.userId,
      product: req.params.productId,
    });
    res.status(200).json({
      status: "success",
      wishlist,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      product: req.params.productId,
      isDeleted: false,
    });
    wishlist.isDeleted = true;
    await wishlist.save();
    res.status(200).json({
      status: "success",
      message: "Wishlist item deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
