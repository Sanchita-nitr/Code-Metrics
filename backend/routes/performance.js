const express = require("express");
const { getPerformanceData } = require("../controllers/performanceController");
const authMiddleware = require("../middleware/authMiddleware"); // Middleware for authentication
const router = express.Router();

router.get("/", authMiddleware, getPerformanceData); // Get performance data for authenticated user
router.get("/leetcode", authMiddleware, (req, res) => getPerformanceData(req, res, "leetcode")); // Get LeetCode performance data
router.get("/codeforces", authMiddleware, (req, res) => getPerformanceData(req, res, "codeforces")); // Get Codeforces performance data
router.get("/codechef", authMiddleware, (req, res) => getPerformanceData(req, res, "codechef")); // Get CodeChef performance data
router.get("/hackerrank", authMiddleware, (req, res) => getPerformanceData(req, res, "hackerrank")); // Get HackerRank performance data
router.get("/hackerearth", authMiddleware, (req, res) => getPerformanceData(req, res, "hackerearth")); // Get HackerEarth performance data

module.exports = router;
