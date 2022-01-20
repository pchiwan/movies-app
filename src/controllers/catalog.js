const Movie = require("../models/Movie");
const ErrorResponse = require("../utils/errorResponse");

//@access public
exports.getAllMovies = (req, res, next) => {
  Movie.find()
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.getByCategory = (req, res, next) => {
  Movie.find({ category: req.params.category })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.searchByTitle = (req, res, next) => {
  Movie.find({ $text: { $search: `${req.query.title}` } })
    .then((movie) =>
      res.status(200).json({
        success: true,
        movie,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.getMovieById = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) =>
      res.status(200).json({
        success: true,
        movie,
      })
    )
    .catch(() =>
      next(new ErrorResponse(`Movie not found with id ${req.params.id}`, 404))
    );
};
