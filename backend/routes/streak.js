const express = require("express");
const { getStreakData } = require("../controllers/streakController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getStreakData);

module.exports = router;