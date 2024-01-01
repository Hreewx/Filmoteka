import styles from "./ButtonForm.module.scss";

function ButtonForm({ children, disabled }) {
  return (
    <button type="submit" className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonForm;
