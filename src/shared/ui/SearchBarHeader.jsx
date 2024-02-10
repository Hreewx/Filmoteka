import { useState } from "react";
import { useMovies } from "../utils/hooks/movies/useMovies";

import styles from "./SearchBarHeader.module.scss";

import SearchBarResults from "../../widgets/SearchBarResults/SearchBarResults";

function SearchBarHeader() {
  const [query, setQuery] = useState("");
  const { movies } = useMovies(query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search for a group, user or film!"
          onChange={handleChange}
        />
        <div className={styles.movieSearch}>
          <SearchBarResults movies={movies} />
        </div>
      </div>
    </>
  );
}

export default SearchBarHeader;
