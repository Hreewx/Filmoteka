import styles from "./InputForm.module.scss";

function InputForm({
  type,
  id,
  autoComplete,
  placeholder,
  disabled,
  register,
  errorMessage,
}) {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
      <p className={styles.error} role="alert">
        {errorMessage}
      </p>
    </>
  );
}

export default InputForm;
