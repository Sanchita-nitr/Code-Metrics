const express = require("express");
const axios = require("axios");
const router = express.Router();
const db = require("../config/db");
const authMiddleware = require("../middleware/authMiddleware");

// Get user coding profiles & stats
router.get("/dashboard", authMiddleware, async (req, res) => {
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


            // Fetch LeetCode data
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
             // Fetch  hackerrank data
             if ( hackerrank_username) {
                try {
                    const hrResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${ hackerrank_username}`);
                    hackerrankData = {
                        username:  hackerrank_username,
                        rating: hrResponse.data.result[0].rating,
                        rank: hrResponse.data.result[0].rank
                    };
                } catch (error) {
                    console.error("Error fetching HackerRank data:", error);
                }
            }
             // Fetch  codechef data
             if ( codechef_username) {
                try {
                    const ccResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${ codechef_username}`);
                    codechefData = {
                        username:  codechef_username,
                        rating: ccResponse.data.result[0].rating,
                        rank: ccResponse.data.result[0].rank
                    };
                } catch (error) {
                    console.error("Error fetching CodeChef data:", error);
                }
            }
             // Fetch  hackerearth data
             if ( hackerearth_username) {
                try {
                    const heResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${ hackerearth_username}`);
                    hackerearthData = {
                        username:  hackerearth_username,
                        rating: heResponse.data.result[0].rating,
                        rank: heResponse.data.result[0].rank
                    };
                } catch (error) {
                    console.error("Error fetching HackerEarth data:", error);
                }
            }


            // Response
            res.json({
                username: user.name,
                email: user.email,
                codingProfiles: { leetcode: leetcodeData, codeforces: codeforcesData, hackerrank: hackerrankData, codechef: codechefData, hackerearth: hackerearthData }
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
