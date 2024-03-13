import { useNavigate } from "react-router-dom";
import styles from "./SearchBarMovie.module.scss";

function SearchBarMovie({
  movie,
  setOpen,
  callbackToSetQuery,
  withCustomHandler,
  onSelectReviewMovie,
}) {
  const { nameRu, posterUrl, rating, year, filmId } = movie;

  const navigate = useNavigate();

  function handleSelectMovie() {
    if (withCustomHandler) {
      onSelectReviewMovie({
        poster: posterUrl,
        name: nameRu,
        overview: "",
        who_watched: "",
        rating_by_user: "",
        rating: "",
        group_id: "",
      });
    } else {
      navigate(`/movie/${filmId}`);
      setOpen(false);
      callbackToSetQuery("");
    }
  }

  return (
    <div className={styles.movieRow} onClick={handleSelectMovie}>
      <img src={posterUrl} />
      <div className={styles.movieInfo}>
        <h3>{nameRu}</h3>
        <div>
          <p>{rating}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBarMovie;
