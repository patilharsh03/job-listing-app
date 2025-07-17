const express = require("express");
const { getAllJobs, getJobsByLocation } = require("../controllers/jobController");
const router = express.Router();

router.get("/", getAllJobs);
router.get("/search", getJobsByLocation);

module.exports = router;