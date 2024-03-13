import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getReviewsByGroupId } from "../../../api/apiReviews";

export function useGetReviewsByGroupId() {
  const { groupId } = useParams();
  const [searchParams] = useSearchParams();

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading: isLoadingReviews,
    data: { data: reviews, count } = {},
    error,
  } = useQuery({
    queryKey: ["reviews", groupId, sortBy, page],
    queryFn: () => getReviewsByGroupId(groupId, { sortBy, page }),
    retry: false,
  });

  return { isLoadingReviews, error, reviews, count };
}
