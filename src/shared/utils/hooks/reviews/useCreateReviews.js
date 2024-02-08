import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { createReview as createReviewApi } from "../../../api/apiReviews";

import toast from "react-hot-toast";

export function useCreateReview() {
  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createReview, isPending } = useMutation({
    mutationFn: createReviewApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      toast.success("New review was successfully created");
      navigate(`/dashboard/${groupId}`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, createReview };
}
