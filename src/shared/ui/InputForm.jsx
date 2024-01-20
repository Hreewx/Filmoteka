import styles from "./InputForm.module.scss";

function InputForm({
  type,
  id,
  autoComplete,
  placeholder,
  disabled,
  register,
  errorMessage,
  value,
  onChange,
  accept,
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
        value={value}
        {...register}
        onChange={onChange}
        accept={accept}
      />
      <p className={styles.error} role="alert">
        {errorMessage}
      </p>
    </>
  );
}

export default InputForm;
