const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router.route("/").get(categoryController.list);
router.route("/").post(categoryController.create);
router.route("/").delete(categoryController.remove);

module.exports = router;
