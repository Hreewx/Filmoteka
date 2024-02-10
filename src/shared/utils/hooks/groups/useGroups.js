import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../../api/apiGroups";

export function useGroups() {
  const { data: groups, isLoading } = useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });

  return { isLoading, groups };
}
