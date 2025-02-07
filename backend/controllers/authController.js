const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

exports.loginWithPlatform = async (req, res) => {
  const { platform, username } = req.body;

  try {
    if (!platform || !username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const query = `SELECT * FROM users WHERE ${platform}_username = ? AND ${platform}_username IS NOT NULL`;
    db.query(query, [username], async (err, results) => {
      if (err) {
        console.error("Database error during login:", err);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const user = results[0];
      if (!user) {
        return res.status(404).json({ error: "User not registered with this platform" });
      }

      return res.json({ message: "User logged in successfully!" });
    });
  } catch (error) {
    console.error("Unexpected Error during login:", error);
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
};

exports.getUserPerformance = async (req, res) => {
    const userId = req.user.id;
    const { platform } = req.params;
  
    try {
      const query = `SELECT * FROM ${platform}_performance WHERE user_id = ?`;
      db.query(query, [userId], (err, results) => {
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
      console.error("Unexpected Error during fetching performance data:", error);
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  };
// ✅ Sign Up
exports.register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        // Check if the email already exists in the database
        const emailExistsQuery = "SELECT * FROM users WHERE email = ?";
        db.query(emailExistsQuery, [email], async (err, results) => {
            if (err) {
                console.error("Database error during email check:", err);
                return res.status(500).json({ error: "Database error" });
            }

            if (results.length > 0) {
                return res.status(409).json({ error: "Email already registered" });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert the new user into the database
            const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            db.query(sql, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error("Database error during registration:", err);
                    return res.status(500).json({ error: "Database error" });
                }

                res.status(201).json({
                    message: "User Registered Successfully!",
                    userId: result.insertId, // Return the newly created user ID
                });
            });
        });
    } catch (error) {
        console.error("Unexpected error during registration:", error);
        return res.status(500).json({ error: "An unexpected error occurred" });
    }
};

// ✅ Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) {
          console.error("Database error during login:", err);
          return res.status(500).json({ error: "Database error" });
        }
        if (results.length === 0) {
          return res.status(401).json({ error: "Invalid email or password" });
        }
  
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ error: "Invalid email or password" });
        }
  
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({ token });
      });
    } catch (error) {
      console.error("Unexpected Error during login:", error);
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
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
            console.error("Database error during password reset:", err);
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
                console.error("Failed to update password:", err);
                return res.status(500).json({ error: "Failed to update password" });
            }
            res.json({ message: "Password updated successfully" });
        });
    });
};
