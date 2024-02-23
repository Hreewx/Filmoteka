import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";

import styles from "./NavBar.module.scss";

function NavBar({ isAuthenticated }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profile");
  }

  return (
    <nav>
      <ul className={styles.navlist}>
        {isAuthenticated ? (
          <NavLink className={styles.link} to="/dashboard">
            Главная
          </NavLink>
        ) : null}
        <NavLink className={styles.link} to="/about">
          О проекте
        </NavLink>
        <NavLink className={styles.link} to="/links">
          Ссылки
        </NavLink>

        {isAuthenticated ? (
          <HiOutlineUser className={styles.icon} onClick={handleClick}>
            <div className={styles.dropdownContent}>
              <NavLink className={styles.linkdrop}>Sign In</NavLink>
              <NavLink className={styles.linkdrop}>Sign Up</NavLink>
              {isAuthenticated ? (
                <NavLink className={styles.linkdrop}>Logout</NavLink>
              ) : null}
            </div>
          </HiOutlineUser>
        ) : (
          <NavLink className={`${styles.link} ${styles.dropdown}`} to="/login">
            Вход
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
