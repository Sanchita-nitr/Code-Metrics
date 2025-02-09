const db = require("../config/db");

const Streak = {
  getByUserId: (userId, callback) => {
    const query = "SELECT * FROM streak WHERE user_id = ?";
    db.query(query, [userId], callback);
  },
};

module.exports = Streak;