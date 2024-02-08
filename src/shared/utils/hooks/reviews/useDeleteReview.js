import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview as deleteReviewApi } from "../../../api/apiReviews";

import toast from "react-hot-toast";

export function useDeleteReview() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteReview } = useMutation({
    mutationFn: deleteReviewApi,
    onSuccess: () => {
      toast.success("Review was successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteReview };
}
