const db = require("../config/db"); // Database configuration
const { trainLinearRegression, trainLogisticRegression } = require("../models/mlModel");
const tf = require('@tensorflow/tfjs-node');

exports.getPerformanceData = async (req, res, platform) => { 
    // Function to get performance data for a specific platform
  
    const userId = req.user.id; // Get user ID from request

  try {
        const query = `SELECT * FROM performance WHERE user_id = ? AND platform = ?`; // Query to fetch performance data

      db.query(query, [userId, platform], async (err, results) => {

      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }

        // Train AI/ML models
      const linearModel = await trainLinearRegression(results.map(d => d.linearFeatures));
      const logisticModel = await trainLogisticRegression(results.map(d => d.logisticFeatures));

      // Make predictions
      const timeSpent = results.map(d => d.timeSpent);
      const linearPredictions = linearModel.predict(tf.tensor2d(timeSpent, [timeSpent.length, 1])).arraySync();
      const logisticPredictions = logisticModel.predict(tf.tensor2d(timeSpent, [timeSpent.length, 1])).arraySync();

            return res.json({ data: results, linearPredictions, logisticPredictions }); // Return performance data and predictions
    });
    } catch (error) { 
        // Handle unexpected errors

    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Unexpected error" });
  }
};
