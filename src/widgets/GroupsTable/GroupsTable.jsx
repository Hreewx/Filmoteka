import { useGroups } from "../../shared/utils/hooks/groups/useGroups";

import Spinner from "../../shared/ui/Spinner";
import Group from "../Group/Group";
import styles from "./GroupsTable.module.scss";

function GroupsTable() {
  const { isLoading, groups } = useGroups();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.groupsContainer}>
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </div>
  );
}

export default GroupsTable;
