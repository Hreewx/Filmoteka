import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.scss";
import { useLogout } from "../../shared/utils/hooks/useLogout";

function NavBar({ isAuthenticated }) {
  const { logout } = useLogout();

  return (
    <nav>
      <ul className={styles.navlist}>
        {isAuthenticated ? (
          <NavLink className={styles.link} to="/dashboard">
            Dashboard
          </NavLink>
        ) : null}
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
        <NavLink className={styles.link} to="/links">
          Links
        </NavLink>
        <NavLink className={`${styles.link} ${styles.dropdown}`} to="/login">
          <div className={styles.dropdownContent}>
            <NavLink className={styles.linkdrop}>Sign In</NavLink>
            <NavLink className={styles.linkdrop}>Sign Up</NavLink>
            {isAuthenticated ? (
              <NavLink className={styles.linkdrop} onClick={logout}>
                Logout
              </NavLink>
            ) : null}
          </div>
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
