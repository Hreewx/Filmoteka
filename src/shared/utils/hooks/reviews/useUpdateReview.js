import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { updateReview as updateReviewApi } from "../../../api/apiReviews";

import toast from "react-hot-toast";

export function useUpdateReview() {
  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateReview, isPending: isUpdating } = useMutation({
    mutationFn: updateReviewApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review"] });
      toast.success("Обзор успешно обновлен");
      navigate(`/dashboard/${groupId}`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateReview };
}
