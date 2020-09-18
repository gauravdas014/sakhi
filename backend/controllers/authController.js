const User = require("../models/userModel");
const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  });

  // Remove password from output
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
    });
    createSendToken(user, 201, req, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const userId = req.body.userId;
    const password = req.body.password;
    const reg = /^\d+$/;
    if (reg.test(userId)) {
      const user = await User.findOne({ phone: userId });
      if (!user || !(await user.correctPassword(password, user.password))) {
        return res.send("Username or password is incorrect");
      }
      createSendToken(user, 200, req, res);
    } else {
      const user = await User.findOne({ email: userId }).select("+password");
      if (!user || !(await user.correctPassword(password, user.password))) {
        return res.send("Username or password is incorrect");
      }
      createSendToken(user, 200, req, res);
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

exports.resetPassword = async (req, res) => {
  try {
    const userId = req.body.userId;
    const reg = /^\d+$/;
    if (reg.test(userId)) {
      const user = await User.findOne({ phone: userId });
      if (!user) {
        res.send("The entered userId does not exist");
      }
      res.status(200).json({
        status: "success",
        user: user,
      });
    } else {
      const user = await User.findOne({ email: userId });
      if (!user) {
        res.send("Username or password is incorrect");
      }
      // Send OTP to email
      res.status(200).json({
        status: "success",
        user: user,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.setNewPassword = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.body.uid });
    if (req.body.password !== req.body.passwordConfirm) {
      res.send("The entered passwords are not same");
    } else {
      user.password = await bcrypt.hash(req.body.password, 12);
      user.passwordConfirm = undefined;
      await user.save();
    }
    res.status(200).json({
      status: "success",
      user: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
