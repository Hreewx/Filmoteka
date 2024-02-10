import { FaEllipsisVertical } from "react-icons/fa6";
import { useState } from "react";
import { useDeleteSuggestion } from "../utils/hooks/suggestions/useDeleteSuggestion";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./KebabMenu.module.scss";

function KebabMenu({ suggestion }) {
  const [open, setOpen] = useState(false);
  const { deleteSuggestion } = useDeleteSuggestion();
  const navigate = useNavigate();
  const { groupId } = useParams();

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  function handleDelete(id) {
    deleteSuggestion(id);
  }

  function handleGoToReview() {
    navigate(`/dashboard/${groupId}/new-review`);
  }
  return (
    <div className={`${styles.kebabMenu}`} onClick={handleOpen}>
      <FaEllipsisVertical />
      {open ? (
        <div className={styles.list}>
          <p onClick={() => handleDelete(suggestion.id)}>Delete</p>
          <p onClick={handleGoToReview}>Add to reviews</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default KebabMenu;
