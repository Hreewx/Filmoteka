import { useGroup } from "../shared/utils/hooks/groups/useGroup";
import { useGetReviewsByGroupId } from "../shared/utils/hooks/reviews/useGetReviewsByGroupId";

import Spinner from "../shared/ui/Spinner";
import styles from "./Statistics.module.scss";

function Statistics() {
  const { group, isLoading } = useGroup();
  const { reviews, isLoadingReviews } = useGetReviewsByGroupId();

  if (isLoading) return <Spinner />;

  if (isLoadingReviews) return <Spinner />;

  const rating = reviews
    .map((review) => review.rating)
    .reduce((acc, value) => acc + value, 0);

  return (
    <section className={styles.container}>
      <h1>Group statistics</h1>
      <p>Users in group : {group.members}</p>
      <p>
        Average film score :{" "}
        {!reviews.length ? 0 : (rating / reviews.length).toFixed(2)}
      </p>
      <p>IQ of each user : </p>
      <p>{reviews.length} films watched</p>
    </section>
  );
}

export default Statistics;
