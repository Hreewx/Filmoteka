import { useNavigate } from "react-router-dom";
import styles from "./SearchBarMovie.module.scss";

function SearchBarMovie({ movie, setOpen, callbackToSetQuery }) {
  const { nameRu, posterUrl, rating, year, filmId } = movie;

  const navigate = useNavigate();

  function handleSelectMovie() {
    navigate(`/movie/${filmId}`);
    setOpen(false);
    callbackToSetQuery("");
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
