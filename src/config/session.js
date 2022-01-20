const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const { ONE_DAY } = require("../utils/constants");

const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
  collection: "sessions",
});

const options = {
  name: "SID",
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  unset: "destroy",
  cookie: {
    httpOnly: true,
    maxAge: ONE_DAY,
    secure: process.env.NODE_ENV === "production",
    sameSite: true,
  },
};

module.exports = session(options);
