import { useNavigate } from "react-router-dom";
import styles from "./SearchBarMovie.module.scss";

function SearchBarMovie({ movie }) {
  const { nameEn, nameRu, posterUrl, rating, year, filmId } = movie;

  const navigate = useNavigate();

  function handleSelectMovie() {
    navigate(`/movie/${filmId}`);
  }

  return (
    <div className={styles.movieRow} onClick={handleSelectMovie}>
      <img src={posterUrl} />
      <div className={styles.movieInfo}>
        <h3>{nameEn || nameRu}</h3>
        <div>
          <p>{rating}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBarMovie;
