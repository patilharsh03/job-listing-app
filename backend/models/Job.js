const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobId: String,
  title: String,
  company: String,
  location: String,
  jobLink: String,
  seniorityLevel: String,
  employmentType: String,
  source: String,
  experience: String,
  companyUrl: String,
  companyImageUrl: String,
  postedDate: Date,
  minExp: Number,
  maxExp: Number,
  country: String,
  companyType: String
});

module.exports = mongoose.model("Job", jobSchema);