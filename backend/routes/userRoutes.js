import axios from "axios";
import express from "express";
import db from "../config/db.js";

const express = require("express");
const axios = require("axios").default;
const router = express.Router();
const db = require("../config/db");
const authMiddleware = require("../middleware/authMiddleware");

// New endpoint to update performance data
router.post("/updatePerformance", authMiddleware, async (req, res) => {
    const { platform, timeSpent, questionsSolved } = req.body;
    const userId = req.user.id;

    try {
        const performanceQuery = `INSERT INTO performance (user_id, platform, time_spent, questions_solved, date) VALUES (?, ?, ?, ?, CURDATE()) ON DUPLICATE KEY UPDATE time_spent = time_spent + ?, questions_solved = questions_solved + ?`;
        db.query(performanceQuery, [userId, platform, timeSpent, questionsSolved], (err) => {
            if (err) {
                console.error("Error updating performance data:", err);
                return res.status(500).json({ error: "Database error" });
            }
            return res.json({ message: "Performance data updated successfully!" });
        });
    } catch (error) {
        console.error("Unexpected error during performance update:", error);
        return res.status(500).json({ error: "An unexpected error occurred" });
    }
});

// New endpoint to get user performance data
router.get("/performance/:platform", authMiddleware, async (req, res) => {
    const userId = req.user.id;
    const { platform } = req.params;

    try {
        const query = `SELECT * FROM performance WHERE user_id = ? AND platform = ?`;
        db.query(query, [userId, platform], (err, results) => {
            if (err) {
                console.error("Database error during fetching performance data:", err);
                return res.status(500).json({ error: "Database error" });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: "No performance data found" });
            }
            return res.json(results);
        });
    } catch (error) {
        console.error("Unexpected error during fetching performance data:", error);
        return res.status(500).json({ error: "An unexpected error occurred" });
    }
});

module.exports = router;
