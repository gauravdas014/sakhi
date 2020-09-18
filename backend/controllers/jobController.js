const Job = require("../models/jobModel");

exports.addJob = async (req, res) => {
  try {
    const newJob = await Job.create({
      name: req.body.name,
      user: req.params.userId,
      description: req.body.description,
    });
    res.status(201).json({
      status: "success",
      newJob,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.params.userId });
    res.status(200).json({
      status: "success",
      jobs,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getJob = async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.jobId });
    res.status(200).json({
      status: "success",
      job,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
