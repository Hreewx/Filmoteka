import { useGetReviewById } from "../shared/utils/hooks/reviews/useGetReviewById";
import styles from "./ReviewPage.module.scss";
import Spinner from "../shared/ui/Spinner";
import InputForm from "../shared/ui/InputForm";
import Button from "../shared/ui/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { useUpdateReview } from "../shared/utils/hooks/reviews/useUpdateReview";
import { updateReview } from "../shared/api/apiReviews";

function ReviewPage() {
  const { fullReview, isLoadingFullReview } = useGetReviewById();
  const { groupId, reviewId } = useParams();
  const [ratings, setRatings] = useState([]);
  // const { updateReview, isUpdating } = useUpdateReview();

  const [updatedReview, setUpdatedReview] = useState({
    poster: "",
    name: "",
    overview: "",
    who_watched: "",
    rating_by_user: "",
    rating: "",
    group_id: "",
  });

  if (isLoadingFullReview) return <Spinner />;

  const { poster, name, rating, rating_by_user, who_watched, overview } =
    fullReview[0];

  console.log(who_watched);

  function handleUpdateOverview(e) {
    setUpdatedReview({ ...updatedReview, overview: e.target.value });
  }

  function handleRatingChange(userName, rating) {
    setRatings((prevRatings) => {
      const updatedRatings = prevRatings.map((item) =>
        item.userName === userName ? { ...item, rating: rating } : item
      );

      if (!updatedRatings.some((item) => item.userName === userName)) {
        updatedRatings.push({ userName, rating });
      }

      setUpdatedReview({ ...updatedReview, rating_by_user: updatedRatings });

      return updatedRatings;
    });
  }
  const summaryRating = ratings.reduce(
    (total, obj) => total + Number(obj.rating) / 2,
    0
  );

  function secureObject() {
    setUpdatedReview({
      ...updatedReview,
      poster: poster,
      name: name,
      rating_by_user: ratings,
      who_watched: who_watched,
      group_id: Number(groupId),
      rating: summaryRating,
    });
  }
  console.log(updatedReview);

  function handleUpdateReview() {
    console.log(updatedReview);

    updateReview(reviewId, updatedReview);

    console.log(updatedReview);
  }

  return (
    <section className={styles.container}>
      <h1>Страница обзора</h1>
      <div className={styles.reviewContainer}>
        <div className={styles.leftColumn}>
          <img src={poster} />
          <h2>{name}</h2>
          <div className={styles.rating}>
            <span>{rating}</span>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <h2>Оценка от каждого зрителя</h2>
            <div>
              {rating_by_user.map((user) => (
                <div key={user.userName}>
                  <label>{user.userName}</label>
                  <InputForm
                    type="text"
                    id={`rating_by_user_${user.userName}`}
                    onChange={(e) =>
                      handleRatingChange(user.userName, e.target.value)
                    }
                    name="rating"
                    autoComplete="off"
                    placeholder="Оценка от зрителя"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>Описание к фильму</h2>
            <textarea
              defaultValue={overview}
              onChange={handleUpdateOverview}
            ></textarea>
          </div>
          <Button onClick={handleUpdateReview}>Обновить обзор</Button>
          <Button onClick={secureObject}>Сохранить изменения</Button>
        </div>
      </div>
    </section>
  );
}

export default ReviewPage;
