const db = require("../config/db");

exports.getStreakData = async (req, res) => {
  const userId = req.user.id;

  try {
    const query = "SELECT * FROM streak WHERE user_id = ?";
    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      return res.json(results);
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Unexpected error" });
  }
};