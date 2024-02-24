import { useQuery } from "@tanstack/react-query";
import { getGroupsMembers } from "../../../api/apiGroups";

export function useGroupsMembers() {
  const { data: groups, isLoading } = useQuery({
    queryKey: ["group_members"],
    queryFn: getGroupsMembers,
  });

  return { isLoading, groups };
}
