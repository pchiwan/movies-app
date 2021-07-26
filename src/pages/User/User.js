import React, { useEffect, useState } from "react";

import MovieList from "../../components/MovieList";
import { getUserFavorites } from "../../services/userService";

const Catalog = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        setMovieList(await getUserFavorites());
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  return <MovieList list={movieList} />;
};

export default Catalog;
