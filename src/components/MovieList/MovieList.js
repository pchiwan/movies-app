import React from "react";

import Movie from "../Movie";

import "./MovieList.scss";

const MovieList = ({ list = [] }) => {
  return (
    <div className="movie-list">
      {list.map((m) => (
        <Movie key={m.title} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;
