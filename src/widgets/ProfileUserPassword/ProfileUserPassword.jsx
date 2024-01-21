import { useForm } from "react-hook-form";
import Button from "../../shared/ui/Button";
import InputForm from "../../shared/ui/InputForm";
import styles from "./ProfileUserPassword.module.scss";
import { useUpdateUser } from "../../shared/utils/hooks/useUpdateUser";

function ProfileUserPassword() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function handleUpdate({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }
  return (
    <>
      <h2>Update password</h2>
      <div className={styles.infoRow}>
        <label>New password</label>
        <InputForm
          id="password"
          type="password"
          autoComplete="false"
          placeholder="New password"
          disabled={isUpdating}
          register={{
            ...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            }),
          }}
          errorMessage={errors.password?.message}
        />
      </div>
      <div className={styles.infoRow}>
        <label>Update password</label>
        <InputForm
          id="passwordConfirm"
          type="password"
          autoComplete="false"
          placeholder="Repeat password"
          disabled={isUpdating}
          register={{
            ...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            }),
          }}
          errorMessage={errors.passwordConfirm?.message}
        />
      </div>

      <div className={styles.infoRow}>
        <Button onClick={handleSubmit(handleUpdate)} disabled={isUpdating}>
          Update password
        </Button>
      </div>
    </>
  );
}

export default ProfileUserPassword;
