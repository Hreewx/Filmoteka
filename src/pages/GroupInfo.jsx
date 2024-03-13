import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGroup } from "../shared/utils/hooks/groups/useGroup";
import { useGetReviewsByGroupId } from "../shared/utils/hooks/reviews/useGetReviewsByGroupId";

import Spinner from "../shared/ui/Spinner";
import Button from "../shared/ui/Button";
import ReviewRow from "../widgets/ReviewRow/ReviewRow";

import styles from "./GroupInfo.module.scss";
import SortBy from "../shared/ui/SortBy";
import Pagination from "../shared/ui/Pagination";

function GroupInfo() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { group, isLoading } = useGroup();
  const { groupId } = useParams();
  const { reviews, isLoadingReviews, count } = useGetReviewsByGroupId();

  if (isLoadingReviews) return <Spinner />;

  const sortBy = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const sortedReviews = reviews.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

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
          <div className={styles.groupActions}>
            <div className={styles.buttonsContainer}>
              <Button onClick={handleCreateReview}>Новый обзор</Button>
              <Button onClick={handleNavigateStat}>Статистика</Button>
              <Button onClick={handleNavigateSuggest}>
                Предложенные фильмы
              </Button>
            </div>
            <div>
              <SortBy
                options={[
                  {
                    value: "created_at-desc",
                    label: "По дате содания (Сначала новые)",
                  },
                  {
                    value: "created_at-asc",
                    label: "По дате создания (Сначала старые)",
                  },
                  {
                    value: "name-asc",
                    label: "По названию фильмов (А - Я)",
                  },
                  {
                    value: "name-desc",
                    label: "По названию фильмов (Я - А)",
                  },
                  {
                    value: "rating-asc",
                    label: "По рейтингу (наименьший)",
                  },
                  {
                    value: "rating-desc",
                    label: "По рейтингу (наибольший)",
                  },
                ]}
              />
            </div>
          </div>
          <div className={styles.reviewsContainer}>
            {!reviews.length ? (
              <h2>
                Вы еще не написали ни одного отзыва. Создайте свой первый!
              </h2>
            ) : (
              <div className={styles.header}>
                <div>ПОСТЕР</div>
                <div>НАЗВАНИЕ</div>
                <div>ОПИСАНИЕ</div>
                <div>КТО СМОТРЕЛ</div>
                <div>ОЦЕНКА</div>
              </div>
            )}
            {sortedReviews.map((review) => (
              <ReviewRow review={review} key={review.id} />
            ))}
            <Pagination count={count} />
          </div>
        </>
      )}
    </section>
  );
}

export default GroupInfo;
