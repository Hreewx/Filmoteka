import { useCreateSuggestion } from "../../shared/utils/hooks/suggestions/useCreateSuggestion";
import { useGroups } from "../../shared/utils/hooks/groups/useGroups";
import { IoMdCloseCircle } from "react-icons/io";

import Button from "../../shared/ui/Button";
import Spinner from "../../shared/ui/Spinner";
import styles from "./Modal.module.scss";

import { useGetSuggestions } from "../../shared/utils/hooks/suggestions/useGetSuggestions";
import toast from "react-hot-toast";

function Modal({ movie, open, setOpen }) {
  const { isLoading, groups } = useGroups();
  const { isAdding, createSuggestion } = useCreateSuggestion();
  const { suggestions } = useGetSuggestions();

  if (isLoading) return <Spinner />;

  function handleAddMovie(id) {
    const newSuggestion = {
      posterUrl: movie.posterUrl,
      nameOriginal: movie.nameOriginal,
      movie_id: movie.kinopoiskId,
      group_id: id,
    };

    const check = suggestions.filter(
      (suggestion) => suggestion.movie_id === newSuggestion.movie_id
    );

    for (let i = 0; i < check.length; i++) {
      if (check[i].group_id === id) {
        toast.error("Movie is already added");
        return;
      }
    }

    createSuggestion({ ...newSuggestion });
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
        <h3>Choose a group to add to</h3>
        {groups.map((group) => (
          <Button
            onClick={() => handleAddMovie(group.id)}
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
