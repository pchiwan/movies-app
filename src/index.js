const express = require("express");
const logger = require("morgan");
const connectDB = require("./config/db");
const passport = require("passport");
const cors = require("cors");

require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");

/**
 * ========== GENERAL SETUP ==============
 */

connectDB();

const app = express();

/**
 * ========== CORS SETUP ==========
 */

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://allwomen-movies-app.herokuapp.com/",
    ],
  })
);
app.set("trust proxy", 1);

/**
 * ========== SESSION SETUP && PASSPORT AUTHENTICATION ==========
 */

app.use(require("./config/session"));
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");

/**
 * ========== ROUTES ==============
 */

const catalogRouter = require("./routes/catalog");
const usersRouter = require("./routes/user");
const authRouter = require("./routes/auth");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // body parser

app.use("/", express.static("./src/public"));
app.use("/api/auth", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/movies", catalogRouter);

/**
 * ========== ERROR HANDLER ==============
 */

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.use(function (req, res, next) {
  let error = new Error("Page not found");
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler);

/**
 * ========== SERVER ==============
 */

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, function () {
  console.log(`Express listening on PORT ${PORT} in ${NODE_ENV} mode`);
});
