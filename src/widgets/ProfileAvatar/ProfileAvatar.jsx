import Button from "../../shared/ui/Button";
import styles from "./ProfileAvatar.module.scss";
import { useLogout } from "../../shared/utils/hooks/authentication/useLogout";
import { useUser } from "../../shared/utils/hooks/user/useUser";
import Spinner from "../../shared/ui/Spinner";

function ProfileAvatar() {
  const { user } = useUser();
  const { logout } = useLogout();

  if (!user) return <Spinner />;

  const userAvatar = user.user_metadata.avatar;
  const login = user.user_metadata.login;

  return (
    <>
      <div className={styles.avatar}>
        <img
          src={userAvatar || "images/default-avatar.jpeg"}
          alt={`Avatar of ${login}`}
        />
        <h2>{login}</h2>
        <p>Number of films watched : 13</p>
        <p>Average movie rating : 7.5</p>
        <Button onClick={logout}>Log out</Button>
      </div>
    </>
  );
}

export default ProfileAvatar;
