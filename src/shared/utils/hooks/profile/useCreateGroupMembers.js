import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGroupMembers as createGroupMembersApi } from "../../../api/apiProfiles";

import toast from "react-hot-toast";

export function useCreateGroupMembers() {
  const queryClient = useQueryClient();

  const { mutate: createGroupMembers, isPending } = useMutation({
    mutationFn: createGroupMembersApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group_members"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, createGroupMembers };
}
