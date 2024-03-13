import { useNavigate, useParams } from "react-router-dom";
import Button from "../../shared/ui/Button";
import { useDeleteReview } from "../../shared/utils/hooks/reviews/useDeleteReview";
import styles from "./ReviewRow.module.scss";

function ReviewRow({ review }) {
  const { id, name, overview, poster, rating, who_watched } = review;
  const { groupId } = useParams();
  const navigate = useNavigate();
  console.log(who_watched);

  const { deleteReview, isDeleting } = useDeleteReview();

  function handleDeleteReview(id) {
    deleteReview(id);
  }

  function handleSeeFullReview() {
    navigate(`/dashboard/${groupId}/review/${id}`);
  }

  return (
    <div className={styles.reviewRow}>
      <div>
        <img src={poster} />
      </div>
      <div>
        <div>{name}</div>
      </div>
      <div>
        <div>{overview}</div>
      </div>
      <div>
        <div>{who_watched.map((user) => user.value)}</div>
      </div>
      <div>
        <div>{rating}</div>
      </div>
      <div>
        <Button disabled={isDeleting} onClick={handleSeeFullReview}>
          Перейти к обзору
        </Button>
        <Button disabled={isDeleting} onClick={() => handleDeleteReview(id)}>
          Удалить обзор
        </Button>
      </div>
    </div>
  );
}

export default ReviewRow;
