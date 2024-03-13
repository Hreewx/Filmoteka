import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import SearchBarHeader from "../../shared/ui/SearchBarHeader";

import styles from "./Header.module.scss";

import { useUser } from "../../shared/utils/hooks/user/useUser";
import { useLocation, useParams } from "react-router-dom";

function Header() {
  const { isAuthenticated } = useUser();
  const { groupId } = useParams();
  let location = useLocation();

  return (
    <header className={styles.header}>
      <Logo />
      {isAuthenticated &&
      location.pathname !== `/dashboard/${groupId}/new-review` ? (
        <SearchBarHeader />
      ) : null}
      <NavBar isAuthenticated={isAuthenticated} />
    </header>
  );
}

export default Header;
