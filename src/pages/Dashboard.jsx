import { NavLink } from "react-router-dom";
import Button from "../shared/ui/Button";
import styles from "./Dashboard.module.scss";
import GroupsTable from "../widgets/GroupsTable/GroupsTable";

function Dashboard() {
  return (
    <section className={styles.container}>
      <div className={styles.buttonsContainer}>
        <NavLink to="/dashboard/creategroup">
          <Button>Создать группу</Button>
        </NavLink>
      </div>
      <GroupsTable />
    </section>
  );
}

export default Dashboard;
