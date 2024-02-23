import { useNavigate } from "react-router-dom";

import styles from "./Group.module.scss";
import { useDeleteGroup } from "../../shared/utils/hooks/groups/useDeleteGroup";
import Button from "../../shared/ui/Button";

function Group({ group }) {
  const { id, name, members, reviews, description } = group;
  const { isDeleting, deleteGroup } = useDeleteGroup();

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/dashboard/${id}`);
  }

  function handleDeleteGroup() {
    deleteGroup(id);
    console.log(isDeleting);
  }

  return (
    <div className={styles.group}>
      <h2>{name}</h2>
      <p>Участники: {members}</p>
      <p>Количество отзывов: {reviews ? reviews : 0}</p>
      <p>Описание: {description}</p>
      <div className={styles.buttonsContainer}>
        <Button onClick={handleClick}>Подробнее</Button>
        <Button onClick={handleDeleteGroup}>Удалить</Button>
      </div>
    </div>
  );
}

export default Group;
