import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSuggestion as createSuggestionApi } from "../../../api/apiSuggestions";

import toast from "react-hot-toast";

export function useCreateSuggestion() {
  const queryClient = useQueryClient();

  const { mutate: createSuggestion, isLoading: isAdding } = useMutation({
    mutationFn: createSuggestionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suggestions"] });
      toast.success("Film is added to suggestions");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, createSuggestion };
}
