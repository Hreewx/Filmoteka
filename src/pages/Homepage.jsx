import Button from "../shared/ui/Button";
import SliderHome from "../widgets/SliderHome/SliderHome";
import styles from "./Homepage.module.scss";

function Homepage() {
  return (
    <section className={styles.home}>
      <div className={styles.home__left}>
        <h1 className={styles.home__header}>Filmoteka</h1>
        <p className={styles.home__text}>
          Filmoteka is an application that was created to evaluate films in a
          large company. Choose a movie you watched and leave ratings and
          comments with your friends!
        </p>
        <Button />
      </div>
      <div className={styles.home__right}>
        <SliderHome />
      </div>
    </section>
  );
}

export default Homepage;
