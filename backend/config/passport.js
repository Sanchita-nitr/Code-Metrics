const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const db = require("../config/db");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails } = profile;
      const email = emails[0].value;

      db.query(
        "SELECT * FROM users WHERE google_id = ? OR email = ?",
        [id, email],
        (err, results) => {
          if (err) return done(err);

          if (results.length > 0) {
            return done(null, results[0]);
          } else {
            db.query(
              "INSERT INTO users (google_id, name, email) VALUES (?, ?, ?)",
              [id, displayName, email],
              (err, results) => {
                if (err) return done(err);
                db.query(
                  "SELECT * FROM users WHERE id = ?",
                  [results.insertId],
                  (err, results) => {
                    if (err) return done(err);
                    return done(null, results[0]);
                  }
                );
              }
            );
          }
        }
      );
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails } = profile;
      const email = emails[0].value;

      db.query(
        "SELECT * FROM users WHERE github_id = ? OR email = ?",
        [id, email],
        (err, results) => {
          if (err) return done(err);

          if (results.length > 0) {
            return done(null, results[0]);
          } else {
            db.query(
              "INSERT INTO users (github_id, name, email) VALUES (?, ?, ?)",
              [id, displayName, email],
              (err, results) => {
                if (err) return done(err);
                db.query(
                  "SELECT * FROM users WHERE id = ?",
                  [results.insertId],
                  (err, results) => {
                    if (err) return done(err);
                    return done(null, results[0]);
                  }
                );
              }
            );
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return done(err);
    done(null, results[0]);
  });
});