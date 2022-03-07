const session = require("express-session");
const MongoStore = require("connect-mongo");

const { ONE_WEEK } = require("../utils/constants");

const sessionStore = new MongoStore({
  mongoUrl: process.env.MONGO_URL,
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
    maxAge: ONE_WEEK,
    secure: process.env.NODE_ENV === "production",
    sameSite: true,
  },
};

module.exports = session(options);
