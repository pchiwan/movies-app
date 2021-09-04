import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useAuth } from "../../AuthProvider";
import MovieList from "../../components/MovieList";
import Selector from "../../components/Selector";
import { getAllMovies } from "../../services/moviesService";
import * as userService from "../../services/userService";

import "./Catalog.scss";

const Catalog = () => {
  const [movieList, setMovieList] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);
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

  const fetchFavorites = useCallback(async () => {
    const abortCtrl = new AbortController();

    const favs = await userService.getUserFavorites(abortCtrl);
    setUserFavorites(favs.map((f) => f._id));
  }, []);

  useEffect(() => {
    const abortCtrl = new AbortController();

    async function load() {
      try {
        setMovieList(await getAllMovies(abortCtrl));
      } catch (err) {
        console.error(err);
      }
    }

    load();

    return () => abortCtrl.abort();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchFavorites();
    }
  }, [fetchFavorites, isAuthenticated]);

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

  const toggleFavorite = useCallback(
    async (movie) => {
      const movieUpdatedPromise = new Promise(async (resolve, reject) => {
        try {
          if (userFavorites.includes(movie._id)) {
            await userService.deleteFromFavorites(movie._id);
            resolve();
          } else {
            await userService.addToFavorites(movie._id);
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      });

      movieUpdatedPromise.then(() => {
        fetchFavorites();
      });
    },
    [fetchFavorites, userFavorites]
  );

  return (
    <div>
      <div className="controls">
        <div>{/* search will go here */}</div>
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
        onMovieClick={toggleFavorite}
        userFavorites={userFavorites}
      />
    </div>
  );
};

export default React.memo(Catalog);
