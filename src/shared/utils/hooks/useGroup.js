import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGroup } from "../../api/apiGroups";

export function useGroup() {
  const { groupId } = useParams();

  const {
    isLoading,
    data: group,
    error,
  } = useQuery({
    queryKey: ["group", groupId],
    queryFn: () => getGroup(groupId),
    retry: false,
  });

  return { isLoading, error, group };
}
