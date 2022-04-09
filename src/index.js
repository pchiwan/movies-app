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
 * ========== SESSION SETUP && PASSPORT AUTHENTICATION ==========
 */

app.use(require("./config/session"));
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");

/**
 * ========== CORS SETUP ==========
 */

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    credentials: true,
    origin: ["https://allwomen-movies-app.herokuapp.com/"],
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
);
app.set("trust proxy", 1);

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

// fallback route for handling client application routes
// https://create-react-app.dev/docs/deployment/
app.get("/*", function (_, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

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
