import { useQuery } from "@tanstack/react-query";
import { getAllNames } from "../../../api/apiProfiles";

export function useGetProfileNames() {
  const { data: names, isLoading: isLoadingNames } = useQuery({
    queryKey: ["profiles"],
    queryFn: getAllNames,
  });

  return { isLoadingNames, names };
}
