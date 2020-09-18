const User = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
    });
    res.status(201).json({
      status: "success",
      user: newUser,
    });
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
        res.send("Username or password is incorrect");
      }
      res.status(200).json({
        status: "success",
        user: user,
      });
    } else {
      const user = await User.findOne({ email: userId }).select("+password");
      if (!user || !(await user.correctPassword(password, user.password))) {
        res.send("Username or password is incorrect");
      }
      res.status(200).json({
        status: "success",
        user: user,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
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
