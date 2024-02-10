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
    nameOriginal,
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

  // function handleCloseModal() {
  //   setOpen(false);
  // }

  return (
    <div className={styles.container}>
      <div className={styles.movieContainer}>
        <div className={styles.imageContainer}>
          <img src={posterUrl} alt="Poster" />
        </div>
        <div className={styles.movieInfo}>
          <div className={styles.movieRow}>
            <h1>{nameOriginal || nameRu}</h1>
            <Button onClick={handleOpenModal}>Add to suggestions</Button>
            <Button onClick={handleOpenModal}>Review this film</Button>
          </div>
          <h2>About film</h2>
          <div className={styles.movieData}>
            <MovieInfoRow>Production year {year}</MovieInfoRow>
            <MovieInfoRow>Slogan {slogan}</MovieInfoRow>
            <MovieInfoRow>Imdb Rating {ratingImdb}</MovieInfoRow>
            <MovieInfoRow>Kinopoisk Rating {ratingKinopoisk}</MovieInfoRow>
            <MovieInfoRow>Film length {`${filmLength} min`}</MovieInfoRow>
            <MovieInfoRow>Certificate {ratingAgeLimits}</MovieInfoRow>
          </div>
        </div>
      </div>
      <Modal movie={movie} open={open} setOpen={setOpen} />
    </div>
  );
}

export default Movie;
