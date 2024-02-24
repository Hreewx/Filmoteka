import SuggestedFilms from "../widgets/SuggestedFilms/SuggestedFilms";
import styles from "./Suggestions.module.scss";

function Suggestions() {
  return (
    <section className={styles.container}>
      <h1>Предложенные фильмы</h1>
      <SuggestedFilms />
    </section>
  );
}

export default Suggestions;
