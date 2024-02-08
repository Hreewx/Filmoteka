import { useNavigate, useParams } from "react-router-dom";
import { useGroup } from "../shared/utils/hooks/groups/useGroup";
import { useGetReviewsByGroupId } from "../shared/utils/hooks/reviews/useGetReviewsByGroupId";

import Spinner from "../shared/ui/Spinner";
import Button from "../shared/ui/Button";
import ReviewRow from "../widgets/ReviewRow/ReviewRow";

import styles from "./GroupInfo.module.scss";

function GroupInfo() {
  const navigate = useNavigate();
  const { group, isLoading } = useGroup();
  const { groupId } = useParams();
  const { reviews, isLoadingReviews } = useGetReviewsByGroupId();
  console.log(reviews);

  if (isLoadingReviews) return <Spinner />;

  function handleNavigateStat() {
    navigate(`/dashboard/${groupId}/statistics`);
  }

  function handleNavigateSuggest() {
    navigate(`/dashboard/${groupId}/suggestions`);
  }

  function handleCreateReview() {
    navigate(`/dashboard/${groupId}/new-review`);
  }

  return (
    <section className={styles.container}>
      {isLoading && isLoadingReviews ? (
        <Spinner />
      ) : (
        <>
          <h1>{group.name}</h1>
          <div className={styles.buttonsContainer}>
            <Button onClick={handleCreateReview}>New review</Button>
            <Button onClick={handleNavigateStat}>Group statistics</Button>
            <Button onClick={handleNavigateSuggest}>Films to offer</Button>
          </div>
          <div className={styles.reviewsContainer}>
            {!reviews.length ? (
              <h2>No reviews found yet. Start by creating one!</h2>
            ) : (
              <div className={styles.header}>
                <div>Poster</div>
                <div>Name</div>
                <div>Overview</div>
                <div>Who watched</div>
                <div>Rating</div>
              </div>
            )}
            {reviews.map((review) => (
              <ReviewRow review={review} key={review.id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default GroupInfo;
