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
      <p>Group Partisipants: {members}</p>
      <p>Number of reviews: {reviews ? reviews : 0}</p>
      <p>Group Overview : {description}</p>
      <div className={styles.buttonsContainer}>
        <Button onClick={handleClick}>See More</Button>
        <Button onClick={handleDeleteGroup}>Delete group</Button>
      </div>
    </div>
  );
}

export default Group;
