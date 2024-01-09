import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <section className={styles.container}>
      <div className={styles.groupContainer}>
        <div className={styles.group}>
          <h2>Group Name</h2>
          <p>Group Partisipants: 8</p>
          <p>Number of reviews: 9</p>
          <p>Group Overview</p>
          <button>See More</button>
        </div>

        <div className={styles.group}>
          <h2>Group Name</h2>
          <p>Group Partisipants: 8</p>
          <p>Number of reviews: 9</p>
          <p>Group Overview</p>
          <button>See More</button>
        </div>

        <div className={styles.group}>
          <h2>Group Name</h2>
          <p>Group Partisipants: 8</p>
          <p>Number of reviews: 9</p>
          <p>Group Overview</p>
          <button>See More</button>
        </div>

        <div className={styles.group}>
          <h2>Group Name</h2>
          <p>Group Partisipants: 8</p>
          <p>Number of reviews: 9</p>
          <p>Group Overview</p>
          <button>See More</button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
