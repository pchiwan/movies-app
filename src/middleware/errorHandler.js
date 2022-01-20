const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  const error = { ...err };
  error.message = err.message;
  console.log(err); //Log for dev

  //Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found with id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose validation error
  if (err.name === "ValidationError") {
    error = new ErrorResponse(err.message, 400);
  }

  process.env.NODE_ENV === "development"
    ? sendErrorDev(error, res)
    : sendErrorProd(error, res);
};

const sendErrorDev = (error, res) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message || "Server Error",
    stack: error.stack,
  });
};

const sendErrorProd = (error, res) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message || "Server Error",
  });
};

module.exports = errorHandler;
