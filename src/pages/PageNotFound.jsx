import styles from "./PageNotFound.module.scss";

function PageNotFound() {
  return (
    <section className={styles.notFound}>
      <h1>Oops. The page you are looking for does not exist.</h1>
    </section>
  );
}

export default PageNotFound;
