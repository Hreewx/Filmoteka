import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <h2>About Filmoteka</h2>
        <p>
          Filmoteka was created as an improvement on the usual Google Sheets,
          where my friends and I rated films we watched together.
        </p>
        <p>
          This was not always convenient due to the specifics of creating tables
          with watched films. Thus, Filmoteka was invented: an application for
          assigning ratings, comments and personal descriptions for each film
          watched.
        </p>
        <p>
          Team up with friends and create groups to rate movies you have seen
          with a big company and leave ratings and comments that you think best
          suit each movie! Each person has their own profile with the number of
          films watched, as well as the average rating for all films.
        </p>
      </div>
    </section>
  );
}

export default About;
