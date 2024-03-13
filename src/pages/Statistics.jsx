import { useGetGroupMembers } from "../shared/utils/hooks/profile/useGetGroupMembers";
import { useParams } from "react-router-dom";
import { useGetReviewsByGroupId } from "../shared/utils/hooks/reviews/useGetReviewsByGroupId";

import Spinner from "../shared/ui/Spinner";
import styles from "./Statistics.module.scss";
import BarChartComponent from "../widgets/BarChartComponent/BarChartComponent";
import { useGetSuggestion } from "../shared/utils/hooks/suggestions/useGetSuggestion";

function Statistics() {
  const { reviews, isLoadingReviews, count } = useGetReviewsByGroupId();
  const { groupId } = useParams();
  const { groupMembers, isLoadingMembers } = useGetGroupMembers(groupId);
  const { suggestion } = useGetSuggestion();

  if (isLoadingMembers) return <Spinner />;

  if (isLoadingReviews) return <Spinner />;

  const users = groupMembers.map((user) => user.login);

  const rating = reviews
    .map((review) => review.rating)
    .reduce((acc, value) => acc + value, 0);

  return (
    <section className={styles.container}>
      <h1>Статистика группы</h1>
      <p>Участники: {users}</p>
      <p>
        Средняя оценка по всем фильмам:{" "}
        {!count ? 0 : (rating / count).toFixed(2)}
      </p>
      <p>Просмотрено фильмов : {count}</p>
      <p>Предложено к просмотру : {suggestion.length} </p>
      <h3>Таблица IQ каждого участника</h3>
      <BarChartComponent groupMembers={groupMembers} />
    </section>
  );
}

export default Statistics;
