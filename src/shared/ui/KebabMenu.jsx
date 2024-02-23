import { FaEllipsisVertical } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { useDeleteSuggestion } from "../utils/hooks/suggestions/useDeleteSuggestion";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./KebabMenu.module.scss";

function KebabMenu({ suggestion }) {
  const [open, setOpen] = useState(false);
  const { deleteSuggestion } = useDeleteSuggestion();
  const navigate = useNavigate();
  const { groupId } = useParams();

  const kebabRef = useRef();

  useEffect(function () {
    function handler(e) {
      if (!kebabRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  function handleDelete(id) {
    deleteSuggestion(id);
  }

  function handleGoToReview() {
    navigate(`/dashboard/${groupId}/new-review`, {
      state: {
        poster: suggestion.posterUrl,
        movieName: suggestion.nameOriginal,
      },
    });
  }
  return (
    <div className={`${styles.kebabMenu}`} onClick={handleOpen}>
      <FaEllipsisVertical />
      {open ? (
        <div className={styles.list} ref={kebabRef}>
          <p onClick={() => handleDelete(suggestion.id)}>Удалить</p>
          <p onClick={handleGoToReview}>Добавить отзыв</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default KebabMenu;
