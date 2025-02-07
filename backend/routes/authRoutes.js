const express = require("express");
const passport = require("passport");
const authMiddleware = require("../middleware/authMiddleware");
const { register, login, logout, forgotPassword, loginWithPlatform, getUserPerformance } = require("../controllers/authController");
const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/login-with-platform", loginWithPlatform);

router.get("/performance/:platform", authMiddleware, getUserPerformance);

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
  res.redirect("/dashboard");
});

router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));
router.get("/auth/github/callback", passport.authenticate("github", { failureRedirect: "/login" }), (req, res) => {
  res.redirect("/dashboard");
});

module.exports = router;