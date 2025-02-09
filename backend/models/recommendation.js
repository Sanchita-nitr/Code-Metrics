const db = require("../config/db");

const Recommendation = {
  getByUserId: (userId, callback) => {
    const query = "SELECT * FROM recommendations WHERE user_id = ?";
    db.query(query, [userId], callback);
  },
};

module.exports = Recommendation;