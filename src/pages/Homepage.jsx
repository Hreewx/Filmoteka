import { useNavigate } from "react-router-dom";
import Button from "../shared/ui/Button";
import SliderHome from "../widgets/SliderHome/SliderHome";
import styles from "./Homepage.module.scss";
import { useUser } from "../shared/utils/hooks/user/useUser";

function Homepage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  function handleClick() {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else navigate("/registration");
  }

  return (
    <section className={styles.home}>
      <div className={styles.home__left}>
        <h1 className={styles.home__header}>Filmoteka</h1>
        <p className={styles.home__text}>
          Filmoteka is an application that was created to evaluate films in a
          large company. Choose a movie you watched and leave ratings and
          comments with your friends!
        </p>

        <Button onClick={handleClick} variant={"solid"}>
          Begin!
        </Button>
      </div>
      <div className={styles.home__right}>
        <SliderHome />
      </div>
    </section>
  );
}

export default Homepage;
