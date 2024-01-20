import MoonLoader from "react-spinners/MoonLoader";
import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <MoonLoader color="#f7f6f8" size={100} speedMultiplier={0.3} />
    </div>
  );
}

export default Spinner;
