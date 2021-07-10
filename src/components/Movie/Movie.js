import React from "react";

import MoviePoster from "../MoviePoster";
import "./Movie.css";

function Movie({ movie }) {
  return (
    <div key={movie.title} className="movie">
      <MoviePoster src={movie.poster} />
      <label className="movie-title">{movie.title}</label>
      <label className="movie-info">{movie.category}</label>
      <label className="movie-info">{movie.year}</label>
    </div>
  );
}

export default Movie;
