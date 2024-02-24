import { useQuery } from "@tanstack/react-query";
import { getTempMovie } from "../../helpers";

export function useTempMovie() {
  const { data: movie, isPending } = useQuery({
    queryKey: ["tempMovie"],
    queryFn: () => getTempMovie(),
  });
  return { movie, isPending };
}
