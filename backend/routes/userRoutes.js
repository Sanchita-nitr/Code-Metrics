const express = require("express");
const axios = require("axios");
const router = express.Router();
const db = require("../config/db");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/loginWithPlatform", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        // Fetch user data from MySQL
        db.query("SELECT name, email, leetcode_username, codeforces_username, hackerrank_username, codechef_username, hackerearth_username FROM users WHERE id = ?", [userId], async (err, results) => {
            if (err) return res.status(500).json({ message: "Database error" });

            if (results.length === 0) return res.status(404).json({ message: "User not found" });

            const user = results[0];
            const { leetcode_username, codeforces_username, hackerrank_username, codechef_username, hackerearth_username } = user;

            let leetcodeData = {};
            let codeforcesData = {};
            let hackerrankData = {};
            let codechefData = {};
            let hackerearthData = {};


            // Fetch user data from MySQL
            if (leetcode_username) {
                try {
                    const lcResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${leetcode_username}`);
                    leetcodeData = {
                        username: leetcode_username,
                        rating: lcResponse.data.result[0].rating,
                        rank: lcResponse.data.result[0].rank
                    };
                } catch (error) {
                    console.error("Error fetching LeetCode data:", error);
                }
            }
            // Fetch CodeForces data
            if (codeforces_username) {
                try {
                    const cfResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${codeforces_username}`);
                    codeforcesData = {
                        username: codeforces_username,
                        rating: cfResponse.data.result[0].rating,
                        rank: cfResponse.data.result[0].rank
                    };
                } catch (error) {
                    console.error("Error fetching CodeForces data:", error);
                }
            }
             // Remove loginWithPlatform functionality from here


            // Response
            res.json({ message: "User logged in successfully!" });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
