const Cart = require("../models/cartModel");

exports.getAllProductsInCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.params.userId });
    res.status(200).json({
      status: "success",
      cart,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId });
    console.log(cart);
    if (cart) {
      const updatedCart = await Cart.findOne({ user: req.params.userId });
    } else if (!cart) {
      const newCart = await Cart.create({
        product: [
          {
            product: req.params.productId,
          },
          {
            productCount: req.body.productCount,
          },
        ],
      });
      res.status(200).json({
        status: "success",
        newCart,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
