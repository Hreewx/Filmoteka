import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../../api/apiReviews";

export function useGetReviewById() {
  const { reviewId } = useParams();

  const {
    isLoading: isLoadingFullReview,
    data: fullReview,
    error,
  } = useQuery({
    queryKey: ["review", reviewId],
    queryFn: () => getReviewById(reviewId),
    retry: false,
  });

  return { isLoadingFullReview, error, fullReview };
}
