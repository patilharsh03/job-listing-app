const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Job = require("../models/Job");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log("MongoDB connected");
  importData();
}).catch((err) => console.error("MongoDB error:", err));

const importData = async () => {
  try {
    const raw = JSON.parse(fs.readFileSync(__dirname + "/jobs.json", "utf-8"));

    const formatted = raw.map(job => ({
      jobId: job["Job ID (Numeric)"]?.$numberLong || "",
      title: job.title,
      company: job.company,
      location: job.location,
      jobLink: job.job_link,
      seniorityLevel: job.seniority_level,
      employmentType: job.employment_type,
      source: job.source,
      experience: job.experience,
      companyUrl: typeof job.company_url === "string" ? job.company_url : "",
      companyImageUrl: typeof job.companyImageUrl === "string" ? job.companyImageUrl : "",
      postedDate: new Date(job.postedDateTime?.$date || Date.now()),
      minExp: job.min_exp,
      maxExp: job.max_exp,
      country: job.country,
      companyType: job.companytype
    }));

    await Job.deleteMany();
    await Job.insertMany(formatted);
    console.log("✅ Jobs imported successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Import failed:", error);
    process.exit(1);
  }
};