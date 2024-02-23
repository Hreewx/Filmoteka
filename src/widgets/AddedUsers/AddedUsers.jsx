import styles from "./AddedUSers.module.scss";
import { IoCloseOutline } from "react-icons/io5";

function AddedUsers({ usernameArray, callbackToSetUsernameArray }) {
  function handleDeleteUser(id) {
    callbackToSetUsernameArray(usernameArray.filter((user) => user.id !== id));
  }

  return (
    <div className={styles.usernameContainer}>
      {usernameArray.map((user) => (
        <div className={styles.user} key={user.id}>
          {user.login}
          <IoCloseOutline
            className={styles.icon}
            onClick={() => handleDeleteUser(user.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default AddedUsers;
