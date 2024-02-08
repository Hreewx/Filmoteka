import { useGetSuggestion } from "../../shared/utils/hooks/suggestions/useGetSuggestion";

import KebabMenu from "../../shared/ui/KebabMenu";
import Spinner from "../../shared/ui/Spinner";

import styles from "./SuggestedFilms.module.scss";

function SuggestedFilms() {
  const { isLoading, suggestion } = useGetSuggestion();
  console.log(suggestion);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      {suggestion.map((suggestion) => (
        <div key={suggestion.id} className={styles.movies}>
          <img
            src={suggestion.posterUrl}
            alt={suggestion.nameOriginal}
            className={styles.movieImage}
          />
          <div className={styles.movieName}>
            {suggestion.nameOriginal}
            <KebabMenu suggestion={suggestion} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestedFilms;
