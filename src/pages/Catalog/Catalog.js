import React, { useEffect, useState } from "react";

import MovieList from "../../components/MovieList";
import { getAllMovies } from "../../services/moviesService";

const Catalog = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        setMovieList(await getAllMovies());
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  return <MovieList list={movieList} />;
};

export default Catalog;
