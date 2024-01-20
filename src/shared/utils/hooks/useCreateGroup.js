import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createGroup as createGroupApi } from "../../api/apiGroups";

import toast from "react-hot-toast";

export function useCreateGroup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createGroup, isPending } = useMutation({
    mutationFn: createGroupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      toast.success("New group was successfully created");
      navigate("/dashboard");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, createGroup };
}
