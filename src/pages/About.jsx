import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <h2>About Filmoteka</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quod, ex a sint sit ratione dolor distinctio assumenda similique vero,
          voluptate minima impedit eligendi, expedita harum excepturi nisi
          obcaecati perferendis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          modi? Sed dolor quos vel dolorum minima facilis quia veniam,
          laboriosam necessitatibus, sequi officia numquam doloremque
          consequatur maxime perferendis velit est?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          maiores. Adipisci sit deserunt temporibus debitis eos commodi magni
          amet reiciendis, nesciunt impedit odio cum quo molestiae? Omnis
          exercitationem doloremque eum.
        </p>
      </div>
    </section>
  );
}

export default About;
