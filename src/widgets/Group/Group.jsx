import { useNavigate } from "react-router-dom";

import styles from "./Group.module.scss";
import { useDeleteGroup } from "../../shared/utils/hooks/groups/useDeleteGroup";
import Button from "../../shared/ui/Button";
import { useGetGroupMembers } from "../../shared/utils/hooks/profile/useGetGroupMembers";
import Spinner from "../../shared/ui/Spinner";

function Group({ group }) {
  const { id, name, reviews, description } = group;
  const { isDeleting, deleteGroup } = useDeleteGroup();
  const navigate = useNavigate();
  const { groupMembers, isLoadingMembers } = useGetGroupMembers(id);

  if (isLoadingMembers) return <Spinner />;

  const users = groupMembers.map((member) => member.login);

  function handleClick() {
    navigate(`/dashboard/${id}`);
  }

  function handleDeleteGroup() {
    deleteGroup(id);
    console.log(isDeleting);
  }

  return (
    <div className={styles.groupWrapper}>
      <div className={styles.group}>
        <h2>{name}</h2>
        <p className={styles.number}>{reviews ? reviews : 0}</p>
        <p className={styles.filmsWatched}>Фильмов просмотрено</p>
        <p>Участники: {users}</p>
        <p>Описание: {description}</p>
        <div className={styles.buttonsContainer}>
          <Button onClick={handleClick}>Подробнее</Button>
          <Button onClick={handleDeleteGroup}>Удалить</Button>
        </div>
      </div>
    </div>
  );
}

export default Group;
