const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  category: {
    type: String,
    required: [true],
  },
  poster: {
    type: String,
    required: [true],
  },
  title: {
    type: String,
    required: [true],
  },
  plot: {
    type: String,
    required: [true],
  },
  year: {
    type: Number,
    required: [true],
  },
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
