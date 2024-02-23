import Button from "../../shared/ui/Button";
import { useDeleteReview } from "../../shared/utils/hooks/reviews/useDeleteReview";
import styles from "./ReviewRow.module.scss";

function ReviewRow({ review }) {
  const { id, name, overview, poster, rating, who_watched } = review;

  const { deleteReview, isDeleting } = useDeleteReview();

  function handleDeleteReview(id) {
    deleteReview(id);
  }

  return (
    <div className={styles.reviewRow}>
      <div>
        <img src="/images/blade-runner.webp" />
        {poster}
      </div>
      <div>{name}</div>
      <div>
        <div>{overview}</div>
      </div>
      <div>
        <div>{who_watched}</div>
      </div>
      <div>
        <div>{rating}</div>
      </div>
      <div>
        <Button disabled={isDeleting} onClick={() => handleDeleteReview(id)}>
          Удалить обзор
        </Button>
      </div>
    </div>
  );
}

export default ReviewRow;
