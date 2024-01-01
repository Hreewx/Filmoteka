import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav>
      <ul className={styles.navlist}>
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
        <NavLink className={styles.link} to="/links">
          Links
        </NavLink>
        <NavLink className={styles.link} to="/login">
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
