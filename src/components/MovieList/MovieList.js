import React from "react";

import Movie from "../Movie";

import "./MovieList.scss";

const MovieList = ({ movies = [] }) => {
  return (
    <div className="movie-list">
      {movies.map((m) => (
        <Movie key={m.title} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;
