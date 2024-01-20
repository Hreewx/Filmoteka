import styles from "./ReviewRow.module.scss";

function ReviewRow() {
  return (
    <div className={styles.reviewRow}>
      <div>
        <img src="/images/blade-runner.webp" />
      </div>
      <div>Blade Runner</div>
      <div>
        <div>
          Ryan Gosling is the best actor of all time and ever will be omg i love
          ryan gosling and his role in film Barbie
        </div>
      </div>
      <div>
        <div>Hreewx, Lenix, F3rry, Milo, Dudoit</div>
      </div>
      <div>
        <div>7/10</div>
      </div>
    </div>
  );
}

export default ReviewRow;
