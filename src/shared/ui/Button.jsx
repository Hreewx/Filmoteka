import styles from "./Button.module.scss";
import classnames from "classnames";

function Button({ children, onClick, variant, className, disabled }) {
  const buttonStyles = classnames({
    [styles.button]: true,
    [className]: true,
    [variant && styles["button" + variant]]: variant,
  });

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
