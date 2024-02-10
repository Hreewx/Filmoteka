import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../../../api/apiAuth";

import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created!");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Something went wrong creating account. Please try again");
    },
  });
  return { signup, isPending };
}
