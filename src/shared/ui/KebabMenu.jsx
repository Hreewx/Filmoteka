import { FaEllipsisVertical } from "react-icons/fa6";

import styles from "./KebabMenu.module.scss";
import { useState } from "react";
import { useDeleteSuggestion } from "../utils/hooks/suggestions/useDeleteSuggestion";

function KebabMenu({ suggestion }) {
  const [open, setOpen] = useState(false);
  const { deleteSuggestion } = useDeleteSuggestion();

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  function handleDelete(id) {
    deleteSuggestion(id);
  }
  return (
    <div className={`${styles.kebabMenu}`} onClick={handleOpen}>
      <FaEllipsisVertical />
      {open ? (
        <div className={styles.list}>
          <button onClick={() => handleDelete(suggestion.id)}>Delete</button>
          <button>Add to reviews</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default KebabMenu;
