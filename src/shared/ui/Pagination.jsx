import styles from "./Pagination.module.scss";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/helpers";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.footer}>
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        {currentPage === pageCount ? count : currentPage * PAGE_SIZE} of{" "}
        <span>{count}</span> обзоров
      </p>
      <div className={styles.buttons}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          <MdOutlineNavigateBefore />
          Предыдущая
        </button>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          Следующая
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
