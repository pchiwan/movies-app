import React from "react";

import MoviePoster from "../MoviePoster";
import "./Movie.scss";

const FULL_STAR = "fas fa-star";
const HALF_STAR = "fas fa-star-half-alt";

const ratingGenerator = (rating) => {
  const output = Array(Math.trunc(rating / 2)).fill(FULL_STAR);

  const rest = (rating / 2) % 1 >= 0.5;
  if (rest) {
    output.push(HALF_STAR);
  }

  return output;
};

function Movie({
  isFavControlVisible,
  isFavorited,
  movie,
  onClick = () => null,
}) {
  const rating = ratingGenerator(movie.rating);

  const handleClick = () => onClick(movie);

  return (
    <div key={movie.title} className="movie" onClick={handleClick}>
      <MoviePoster
        isFavControlVisible={isFavControlVisible}
        isFavorited={isFavorited}
        src={movie.poster}
      />
      <label className="movie-title">{movie.title}</label>
      <label className="movie-info">{movie.category}</label>
      <label className="movie-info">{movie.year}</label>
      <label className="movie-rating">
        {rating.map((r) => (
          <i className={r} />
        ))}
      </label>
    </div>
  );
}

export default Movie;
