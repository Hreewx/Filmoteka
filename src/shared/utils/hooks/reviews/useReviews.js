import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../../api/apiReviews";

export function useReviews() {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  return { isLoading, reviews };
}
