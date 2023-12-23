import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav>
      <ul className={styles.navlist}>
        <NavLink className={styles.navlist__link} to={"/about"}>
          About
        </NavLink>
        <NavLink className={styles.navlist__link} to={"/links"}>
          Links
        </NavLink>
        <NavLink to="/login" className={styles.navlist__link}>
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
