import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../api/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
    onError: () => {
      toast.error("Something went wrong creating account. Please try again");
    },
  });
  return { signup, isPending };
}
