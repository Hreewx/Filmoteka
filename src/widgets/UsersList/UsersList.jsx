import styles from "./UsersList.module.scss";

function UsersList({ onClick, username }) {
  return (
    <div className={styles.list}>
      {username
        ? username.map((user) => (
            <div key={user.id} className={styles.user} onClick={onClick}>
              {user.login}
            </div>
          ))
        : ""}
    </div>
  );
}

export default UsersList;
