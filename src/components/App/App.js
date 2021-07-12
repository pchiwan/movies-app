import React, { useEffect, useState } from "react";

import Movie from "../Movie";

import { fetchMovieCatalog } from "../../fetchMovies";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function load() {
      setMovieList(await fetchMovieCatalog());
    }
    load();
  }, []);

  return (
    <div className="app">
      <header>
        <h1 className="title">
          <span>Movies</span> <span>App</span>{" "}
          <span role="img" aria-label="Popcorn">
            🍿
          </span>
        </h1>
      </header>
      <main className="movie-list">
        {movieList.map((m) => (
          <Movie key={m.title} movie={m} />
        ))}
      </main>
    </div>
  );
}

export default App;
