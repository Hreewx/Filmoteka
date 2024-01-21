import { useGroups } from "../shared/utils/hooks/useGroups";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./GroupInfo.module.scss";
import Spinner from "../shared/ui/Spinner";
import Group from "../widgets/Group/Group";
import Button from "../shared/ui/Button";
import ReviewRow from "../widgets/ReviewRow/ReviewRow";

function GroupInfo() {
  const { groups, isLoading } = useGroups();
  const navigate = useNavigate();

  const { groupId } = useParams();

  if (isLoading) return <Spinner />;

  function handleNavigateStat() {
    navigate(`/dashboard/${groupId}/statistics`);
  }

  function handleCreateReview() {
    navigate(`/dashboard/${groupId}/new-review`);
  }

  return (
    <section className={styles.container}>
      <div className={styles.buttonsContainer}>
        <Button onClick={handleCreateReview}>Create new review</Button>
        <Button onClick={handleNavigateStat}>Group statistics</Button>
        <div className={styles.filmsWatched}>
          <p>X films watched</p>
        </div>
      </div>
      <div className={styles.reviewsContainer}>
        <div className={styles.header}>
          <div>Poster</div>
          <div>Name</div>
          <div>Overview</div>
          <div>Who watched</div>
          <div>Rating</div>
        </div>
        {groups.map((group) => {
          if (group.id == groupId)
            return <Group key={group.id} group={group} />;
        })}
        <ReviewRow />
        <ReviewRow />
      </div>
    </section>
  );
}

export default GroupInfo;
