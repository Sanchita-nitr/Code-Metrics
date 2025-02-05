
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Fix: Add a root route to prevent "Cannot GET /"
app.get("/login", (req, res) => {
  res.send("Login page");
});
app.get("/signup", (req, res) => {
  res.send("Signup page");
});
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});
// Routes
app.use("/api", authRoutes);
// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} mode on port ${port}!`);
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Internal Server Error" });
});

