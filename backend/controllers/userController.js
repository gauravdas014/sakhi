const userModel = require("../models/userModel")

exports.me = (req, res) => {
  userModel.findOne({ email: req.params.email })
    .then(user => {
      if (user) {
        return res.status(201).json({ auth: true, user });
      } else {
        return res.status(503).json({ auth: false, user });
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(501).json({ auth: false, user: null });
    })
}