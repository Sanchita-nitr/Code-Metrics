const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Fix: Add a root route to prevent "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Routes
app.use("/api", authRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
