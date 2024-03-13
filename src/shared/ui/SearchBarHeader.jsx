import { useEffect, useRef, useState } from "react";
import { useMovies } from "../utils/hooks/movies/useMovies";

import styles from "./SearchBarHeader.module.scss";

import SearchBarResults from "../../widgets/SearchBarResults/SearchBarResults";

function SearchBarHeader({ withCustomHandler, onSelectReviewMovie }) {
  const [query, setQuery] = useState("");
  const { movies } = useMovies(query);
  const searchMovieRef = useRef();
  const [open, setOpen] = useState(false);

  function callbackToSetQuery(data) {
    setQuery(data);
  }

  useEffect(function () {
    function handler(e) {
      if (!searchMovieRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function handleChange(e) {
    setQuery(e.target.value);
    if (query.length > 1) setOpen(true);
  }

  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Поиск по фильмам"
          value={query}
          onChange={handleChange}
        />
        <div className={styles.movieSearch} ref={searchMovieRef}>
          {open && (
            <SearchBarResults
              movies={movies}
              setOpen={setOpen}
              callbackToSetQuery={callbackToSetQuery}
              withCustomHandler={withCustomHandler}
              onSelectReviewMovie={onSelectReviewMovie}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBarHeader;
