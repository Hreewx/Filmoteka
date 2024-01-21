import styles from "./Textarea.module.scss";

function Textarea({ placeholder, id, autocomplete, register, errorMessage }) {
  return (
    <>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        id={id}
        {...register}
        autoComplete={autocomplete}
      ></textarea>
      <p className={styles.error} role="alert">
        {errorMessage}
      </p>
    </>
  );
}

export default Textarea;
