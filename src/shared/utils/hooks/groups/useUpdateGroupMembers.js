import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGroupMembers as updateGroupMembersApi } from "../../../api/apiGroups";

import toast from "react-hot-toast";

export function useUpdateGroupMembers() {
  const queryClient = useQueryClient();

  const { mutate: updateGroupMembers, isPending: isUpdating } = useMutation({
    mutationFn: updateGroupMembersApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group_members"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateGroupMembers };
}
