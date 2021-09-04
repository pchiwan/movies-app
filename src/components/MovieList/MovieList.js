import React from "react";

import Movie from "../Movie";

import "./MovieList.scss";

const MovieList = ({
  isFavControlVisible,
  movies = [],
  onMovieClick,
  userFavorites = [],
}) => {
  return (
    <div className="movie-list">
      {movies.map((m) => (
        <Movie
          key={m._id}
          isFavControlVisible={isFavControlVisible}
          isFavorited={userFavorites.includes(m._id)}
          movie={m}
          onClick={onMovieClick}
        />
      ))}
    </div>
  );
};

export default MovieList;
