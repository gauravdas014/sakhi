const Product = require("../models/productModel");

exports.create = async (req, res) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.params.categoryId,
      quantity: req.body.quantity,
      created_by: req.body.creator_user_id,
      photo: req.body.photo,
    });
    res.status(201).json({
      status: "success",
      newProduct,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(200).json({
      status: "success",
      message: error.message,
    });
  }
};
