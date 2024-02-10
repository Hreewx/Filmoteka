import { useUpdateUser } from "../shared/utils/hooks/user/useUpdateUser";

import styles from "./Profile.module.scss";

import Spinner from "../shared/ui/Spinner";
import ProfileAvatar from "../widgets/ProfileAvatar/ProfileAvatar";
import ProfileUserData from "../widgets/ProfileUserData/ProfileUserData";
import ProfileUserPassword from "../widgets/ProfileUserPassword/ProfileUserPassword";

function Profile() {
  const { isUpdating } = useUpdateUser();
  if (isUpdating) return <Spinner />;

  return (
    <section className={styles.container}>
      <h1>PROFILE</h1>
      <div className={styles.profileContainer}>
        <ProfileAvatar />
        <div className={styles.info}>
          <form className={styles.infoContainer}>
            <ProfileUserData />
            <ProfileUserPassword />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
