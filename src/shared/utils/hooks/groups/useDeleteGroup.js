import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGroup as deleteGroupApi } from "../../../api/apiGroups";

import toast from "react-hot-toast";

export function useDeleteGroup() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteGroup } = useMutation({
    mutationFn: deleteGroupApi,
    onSuccess: () => {
      toast.success("Group was successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteGroup };
}
