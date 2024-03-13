import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGroups } from "../shared/utils/hooks/groups/useGroups";

import MovieInfoRow from "../widgets/MovieInfoRow/MovieInfoRow";
import Button from "../shared/ui/Button";
import Modal from "../widgets/Modal/Modal";

import styles from "./Movie.module.scss";

const API_MOVIE_KEY = "7d644d60-e7a0-4b79-bd5a-60f4a4cb6a85";

function Movie() {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState([]);
  const [buttonId, setButtonId] = useState();

  const { movieId } = useParams();
  const { groups } = useGroups();

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          const res = await fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`,
            {
              method: "GET",
              headers: {
                "X-API-KEY": `${API_MOVIE_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );

          const data = await res.json();
          setMovie(data);
        } catch (error) {
          console.log(error.message);
        }
      }
      getMovieDetails();
    },
    [movieId]
  );

  if (!groups) return;

  const {
    nameRu,
    posterUrl,
    year,
    slogan,
    ratingImdb,
    ratingKinopoisk,
    filmLength,
    ratingAgeLimits,
  } = movie;

  function handleOpenModal() {
    setOpen(true);
  }

  function handleSetButton(data) {
    setButtonId(data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.movieWrapper}>
        <div className={styles.movieContainer}>
          <div className={styles.imageContainer}>
            <img src={posterUrl} alt="Poster" />
          </div>
          <div className={styles.movieInfo}>
            <h1>{nameRu}</h1>
            <h2>Информация о фильме</h2>
            <div className={styles.movieData}>
              <MovieInfoRow>Год производства {year || "-"}</MovieInfoRow>
              <MovieInfoRow>Слоган {slogan || "-"}</MovieInfoRow>
              <MovieInfoRow>Рейтинг Imdb {ratingImdb || "-"}</MovieInfoRow>
              <MovieInfoRow>
                Рейтинг Kinopoisk {ratingKinopoisk || "-"}
              </MovieInfoRow>
              <MovieInfoRow>
                Продолжительность{`${filmLength} минут` || "-"}
              </MovieInfoRow>
              <MovieInfoRow>Возраст {ratingAgeLimits || "-"}</MovieInfoRow>
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  handleOpenModal();
                  handleSetButton(1);
                }}
              >
                Предложить фильм
              </Button>
              <Button
                onClick={() => {
                  handleOpenModal();
                  handleSetButton(2);
                }}
              >
                Оставить отзыв
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal movie={movie} open={open} setOpen={setOpen} buttonId={buttonId} />
    </div>
  );
}

export default Movie;
