import React, { useEffect, useMemo, useState } from "react";

import MovieList from "../../components/MovieList";
import Selector from "../../components/Selector";

import "./Catalog.scss";

const Catalog = ({ fetchMethod }) => {
  const [movieList, setMovieList] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Title");
  const [selectedCategory, setSelectedCategory] = useState("");

  const sortBy = ["Title", "Category", "Year"];

  const categories = useMemo(() => {
    const categorySet = new Set();
    categorySet.add("All");
    movieList.forEach((m) => categorySet.add(m.category));
    return Array.from(categorySet);
  }, [movieList]);

  useEffect(() => {
    async function load() {
      try {
        setMovieList(await fetchMethod());
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, [fetchMethod]);

  useEffect(() => {
    let output = [];
    if (!selectedCategory || selectedCategory === "All") {
      output = [...movieList];
    } else {
      output = movieList.filter((m) => m.category === selectedCategory);
    }

    const key = selectedSort.toLowerCase();
    output.sort((a, b) => (a[key] < b[key] ? -1 : 1));

    setDisplayedMovies(output);
  }, [movieList, selectedCategory, selectedSort]);

  return (
    <div>
      <div className="controls">
        <div>Search placeholder</div>
        <div>
          <Selector
            label="Sort by:"
            onChange={setSelectedSort}
            options={sortBy}
            selected={selectedSort}
          />
          <Selector
            label="Category:"
            onChange={setSelectedCategory}
            options={categories}
            selected={selectedCategory}
          />
        </div>
      </div>
      <MovieList movies={displayedMovies} />
    </div>
  );
};

export default React.memo(Catalog);
