const Job = require("../models/Job");

exports.getAllJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;   // default = 1
    const limit = parseInt(req.query.limit) || 10; // default = 10
    const skip = (page - 1) * limit;

    const jobs = await Job.find().skip(skip).limit(limit);
    const total = await Job.countDocuments();

    res.json({
      jobs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getJobsByLocation = async (req, res) => {
  try {
    const location = req.query.location || "";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {
      location: { $regex: location, $options: "i" },
    };

    const jobs = await Job.find(filter).skip(skip).limit(limit);
    const total = await Job.countDocuments(filter);

    res.json({
      jobs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};