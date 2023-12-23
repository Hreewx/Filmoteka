import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <div>
      <i className={styles.logo}>
        <NavLink className={styles.logo__link} to={"/"}>
          Filmoteka
        </NavLink>
      </i>
    </div>
  );
}

export default Logo;
