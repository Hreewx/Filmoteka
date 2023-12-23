import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
