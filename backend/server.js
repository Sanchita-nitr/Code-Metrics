const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
// const passport = require("passport");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const performanceRoutes = require("./routes/performance");
const streakRoutes = require("./routes/streak");
const recommendationRoutes = require("./routes/recommendation");
require("dotenv").config();
require("./config/passport"); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// ✅ Fix: Add a root route to prevent "Cannot GET /"
app.get("/login", (req, res) => { 
    // Route for login page
  res.send("Login page");
});
app.get("/signup", (req, res) => { 
    // Route for signup page
  res.send("Signup page");
});
app.get("/", (req, res) => { 
    // Root route
  res.send("Welcome to the backend server!");
});
app.get("/leetcodeDashboard", (req, res) => {
  res.send("LeetCode Dashboard");
});
app.get("/codeforcesDashboard", (req, res) => {
  res.send("Codeforces Dashboard");
});
app.get("/hackerrankDashboard", (req, res) => {
  res.send("Hackerrank Dashboard");
});
app.get("/codechefDashboard", (req, res) => {
  res.send("Codechef Dashboard");
});
app.get("/hackerearthDashboard", (req, res) => {
  res.send("Hackerearth Dashboard");
});
app.get("/dashboard", (req, res) => {
  res.send("Welcome to the dashboard!");
});
app.get("/profile", (req, res) => {
  res.send("Welcome to your profile!");
});
app.get("/performance", (req, res) => { 
    // Route for performance page
  res.send("Welcome to the performance page!");
});
app.get("/streak", (req, res) => {
  res.send("Welcome to the streak page!");
});
app.get("/recommendation", (req, res) => {
  res.send("Welcome to the recommendation page!");
});

// Routes
app.use("/api", userRoutes); // User routes
app.use("/api", authRoutes);
app.use("/api/performance", performanceRoutes); // Performance routes
app.use("/api/streak", streakRoutes);
app.use("/api/recommendation", recommendationRoutes);


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
