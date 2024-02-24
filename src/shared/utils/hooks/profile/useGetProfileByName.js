import { useQuery } from "@tanstack/react-query";
import { getProfileName } from "../../../api/apiProfiles";

export function useGetProfileByName(login) {
  const {
    isLoading: isLoadingUsername,
    data: username,
    error,
  } = useQuery({
    queryKey: ["profiles", login],
    queryFn: () => getProfileName(login),
    retry: false,
  });

  return { isLoadingUsername, error, username };
}
