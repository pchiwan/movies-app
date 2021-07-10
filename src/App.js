import React, { useState } from "react";

import Movie from "./components/Movie";

import "./App.css";
import movies from "./movies";

function App() {
  const [movieList] = useState(movies);

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
