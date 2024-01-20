import { useGroup } from "../shared/utils/hooks/useGroup";
import styles from "./Statistics.module.scss";

function Statistics() {
  const { group, isLoading } = useGroup();
  console.log(group);
  console.log(isLoading);

  return <section className={styles.container}>Statistics page</section>;
}

export default Statistics;
