import styles from "./PageNotFound.module.scss";

function PageNotFound() {
  return (
    <section className={styles.notFound}>
      <h2>Oops. The page you are looking for does not exist.</h2>
    </section>
  );
}

export default PageNotFound;
