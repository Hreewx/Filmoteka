import SearchBarMovie from "../SearchBarMovie/SearchBarMovie";
import styles from "./SearchBarResults.module.scss";

function SearchBarResults({ movies }) {
  return (
    <div className={styles.resultsList}>
      {movies.map((movie) => (
        <SearchBarMovie movie={movie} key={movie.filmId} />
      ))}
    </div>
  );
}

export default SearchBarResults;
