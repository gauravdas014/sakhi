const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      {
        productCount: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
