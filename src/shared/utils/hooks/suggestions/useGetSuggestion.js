import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSuggestion } from "../../../api/apiSuggestions";

export function useGetSuggestion() {
  const { groupId } = useParams();

  const {
    isLoading,
    data: suggestion,
    error,
  } = useQuery({
    queryKey: ["suggestions", groupId],
    queryFn: () => getSuggestion(groupId),
    retry: false,
  });

  return { isLoading, error, suggestion };
}
