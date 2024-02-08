import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import SearchBarHeader from "../../shared/ui/SearchBarHeader";

import styles from "./Header.module.scss";

import { useUser } from "../../shared/utils/hooks/user/useUser";

function Header() {
  const { isAuthenticated } = useUser();

  return (
    <header className={styles.header}>
      <Logo />
      {isAuthenticated ? <SearchBarHeader /> : null}
      <NavBar isAuthenticated={isAuthenticated} />
    </header>
  );
}

export default Header;
