import SearchBarMovie from "../SearchBarMovie/SearchBarMovie";
import styles from "./SearchBarResults.module.scss";

function SearchBarResults({
  movies,
  setOpen,
  callbackToSetQuery,
  withCustomHandler,
  onSelectReviewMovie,
}) {
  return (
    <div className={styles.resultsList}>
      {movies.map((movie) => (
        <SearchBarMovie
          movie={movie}
          key={movie.filmId}
          setOpen={setOpen}
          callbackToSetQuery={callbackToSetQuery}
          withCustomHandler={withCustomHandler}
          onSelectReviewMovie={onSelectReviewMovie}
        />
      ))}
    </div>
  );
}

export default SearchBarResults;
