import styles from "./ButtonForm.module.scss";

function ButtonForm({ children }) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}

export default ButtonForm;
