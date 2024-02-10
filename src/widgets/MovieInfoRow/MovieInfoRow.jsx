import styles from "./MovieInfoRow.module.scss";

function MovieInfo({ children }) {
  const [title, value] = children;

  return (
    <div className={styles.movieRow}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default MovieInfo;
