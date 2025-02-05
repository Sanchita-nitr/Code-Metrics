// filepath: /Users/sanchita/Documents/Code-Metrics/code-metrics/backend/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

// ✅ Sign Up
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }
        res.status(201).json({ message: "User Registered Successfully!" });
    });
};

// ✅ Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "User not registered. Please sign up first." });
        }

        const user = results[0];

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, message: "Login successful" });
    });
};

// ✅ Logout
exports.logout = async (req, res) => {
    res.json({ message: "Logged out successfully!" });
};

// ✅ Forgot Password - Update Password
exports.forgotPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "User not registered. Please sign up first." });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password in database
        db.query("UPDATE users SET password = ? WHERE email = ?", [hashedPassword, email], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Failed to update password" });
            }
            res.json({ message: "Password updated successfully" });
        });
    });
};