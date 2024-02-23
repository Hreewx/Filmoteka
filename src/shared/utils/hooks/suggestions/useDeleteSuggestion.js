import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSuggestion as deleteSuggestionApi } from "../../../api/apiSuggestions";

import toast from "react-hot-toast";

export function useDeleteSuggestion() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteSuggestion } = useMutation({
    mutationFn: deleteSuggestionApi,
    onSuccess: () => {
      toast.success("Фильм удален из предложенных");
      queryClient.invalidateQueries({
        queryKey: ["suggestions"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteSuggestion };
}
