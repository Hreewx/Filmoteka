import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getReviewsByGroupId } from "../../../api/apiReviews";

export function useGetReviewsByGroupId() {
  const { groupId } = useParams();

  const {
    isLoading: isLoadingReviews,
    data: reviews,
    error,
  } = useQuery({
    queryKey: ["reviews", groupId],
    queryFn: () => getReviewsByGroupId(groupId),
    retry: false,
  });

  return { isLoadingReviews, error, reviews };
}
