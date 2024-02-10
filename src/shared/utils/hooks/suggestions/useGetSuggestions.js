import { useQuery } from "@tanstack/react-query";
import { getSuggestions } from "../../../api/apiSuggestions";

export function useGetSuggestions() {
  const {
    isLoading,
    data: suggestions,
    error,
  } = useQuery({
    queryKey: ["suggestions"],
    queryFn: getSuggestions,
  });
  return { isLoading, error, suggestions };
}
