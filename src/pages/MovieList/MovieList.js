import React, { useEffect, useState } from "react";

import Movie from "../../components/Movie";
import { fetchMovieCatalog } from "../../fetchMovies";

import "./MovieList.scss";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function load() {
      setMovieList(await fetchMovieCatalog());
    }
    load();
  }, []);

  return (
    <div className="movie-list">
      {movieList.map((m) => (
        <Movie key={m.title} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;
