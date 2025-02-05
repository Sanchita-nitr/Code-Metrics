// filepath: /Users/sanchita/Documents/Code-Metrics/code-metrics/backend/routes/authRoutes.js
const express = require("express");
const { register, login, logout, forgotPassword } = require("../controllers/authController");
const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);

module.exports = router;