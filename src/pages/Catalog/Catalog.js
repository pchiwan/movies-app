import React, { useEffect, useMemo, useState } from "react";

import { useAuth } from "../../AuthProvider";
import MovieList from "../../components/MovieList";
import Selector from "../../components/Selector";

import "./Catalog.scss";

const Catalog = ({ fetchMethod }) => {
  const [movieList, setMovieList] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Title");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { isAuthenticated } = useAuth();

  const sortBy = ["Title", "Category", "Year"];

  const categories = useMemo(() => {
    const categorySet = new Set();
    categorySet.add("All");
    movieList.forEach((m) => categorySet.add(m.category));
    return Array.from(categorySet);
  }, [movieList]);

  useEffect(() => {
    const abortCtrl = new AbortController();

    async function load() {
      try {
        setMovieList(await fetchMethod(abortCtrl));
      } catch (err) {
        console.error(err);
      }
    }

    load();

    return () => abortCtrl.abort();
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
      <MovieList
        isFavControlVisible={isAuthenticated}
        movies={displayedMovies}
      />
    </div>
  );
};

export default React.memo(Catalog);
