import { useQuery } from "@tanstack/react-query";
import { getGroupMembersByGroupId } from "../../../api/apiProfiles";

export function useGetGroupMembers(id) {
  const {
    isLoading: isLoadingMembers,
    data: groupMembers,
    error,
  } = useQuery({
    queryKey: ["members", id],
    queryFn: () => getGroupMembersByGroupId(id),
    retry: false,
  });

  return { isLoadingMembers, error, groupMembers };
}
