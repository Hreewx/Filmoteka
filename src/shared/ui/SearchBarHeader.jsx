import { useState } from "react";
import { getMovies } from "../api/apiFilms";
import styles from "./SearchBarHeader.module.scss";

function SearchBarHeader() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    getMovies(query);
  }

  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Search for a group, user or film!"
      onChange={handleChange}
    />
  );
}

export default SearchBarHeader;
