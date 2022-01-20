const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, {
        message: `No user found with email <${email}>`,
      });
    }

    return !user.validPassword(password)
      ? done(null, false, { message: "Wrong password" })
      : done(null, user);
  });
};

passport.use(new LocalStrategy(customFields, verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
