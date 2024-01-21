import { useNavigate } from "react-router-dom";

import styles from "./Group.module.scss";

function Group({ group }) {
  const { id, name, members, reviews, description } = group;

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/dashboard/${id}`);
  }

  return (
    <div className={styles.group}>
      <h2>{name}</h2>
      <p>Group Partisipants: {members}</p>
      <p>Number of reviews: {reviews ? reviews : 0}</p>
      <p>Group Overview : {description}</p>
      <button onClick={handleClick}>See More</button>
    </div>
  );
}

export default Group;
