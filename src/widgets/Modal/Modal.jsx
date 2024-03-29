import { useCreateSuggestion } from "../../shared/utils/hooks/suggestions/useCreateSuggestion";
import { useGroups } from "../../shared/utils/hooks/groups/useGroups";
import { IoMdCloseCircle } from "react-icons/io";
import { useGetSuggestions } from "../../shared/utils/hooks/suggestions/useGetSuggestions";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/ui/Button";
import Spinner from "../../shared/ui/Spinner";
import styles from "./Modal.module.scss";

import toast from "react-hot-toast";

function Modal({ movie, open, setOpen, buttonId }) {
  const { isLoading, groups } = useGroups();
  const { isAdding, createSuggestion } = useCreateSuggestion();
  const { suggestions } = useGetSuggestions();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  function handleAddMovie(id) {
    const newSuggestion = {
      posterUrl: movie.posterUrl,
      nameOriginal: movie.nameRu,
      movie_id: movie.kinopoiskId,
      group_id: id,
    };

    const check = suggestions.filter(
      (suggestion) => suggestion.movie_id === newSuggestion.movie_id
    );

    for (let i = 0; i < check.length; i++) {
      if (check[i].group_id === id) {
        toast.error("Фильм уже добавлен");
        return;
      }
    }

    createSuggestion({ ...newSuggestion });
    setOpen((prev) => !prev);
  }

  function handleAddReview(id) {
    navigate(`/dashboard/${id}/new-review`, {
      state: {
        poster: movie.posterUrl,
        movieName: movie.nameRu,
      },
    });
  }

  function handleCloseModal() {
    setOpen(false);
  }

  return (
    <div className={`${styles.modal} ${open ? styles.opened : styles.closed}`}>
      <div className={styles.modalContent}>
        <IoMdCloseCircle
          className={styles.iconClose}
          onClick={handleCloseModal}
        />
        <h3>Выбрать группу</h3>
        {groups.map((group) => (
          <Button
            onClick={() => {
              if (buttonId === 1) handleAddMovie(group.id);
              else if (buttonId === 2) handleAddReview(group.id);
            }}
            key={group.id}
            disabled={isAdding}
          >
            {group.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Modal;
