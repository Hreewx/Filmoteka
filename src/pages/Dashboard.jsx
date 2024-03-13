import { useNavigate } from "react-router-dom";
import Button from "../shared/ui/Button";
import styles from "./Dashboard.module.scss";
import GroupsTable from "../widgets/GroupsTable/GroupsTable";

function Dashboard() {
  const navigate = useNavigate();

  function handleCreateGroup() {
    navigate("/dashboard/creategroup");
  }

  return (
    <section className={styles.container}>
      <div className={styles.buttonsContainer}>
        <Button onClick={handleCreateGroup}>Создать группу</Button>
      </div>
      <GroupsTable />
    </section>
  );
}

export default Dashboard;
