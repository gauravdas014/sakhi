const express = require("express");
const router = express.Router();

const jobController = require("../controllers/jobController");

router.route("/:userId").get(jobController.getAllJobs);
router.route("/:userId").post(jobController.addJob);
router.route("/single/:jobId").get(jobController.getJob);

module.exports = router;
