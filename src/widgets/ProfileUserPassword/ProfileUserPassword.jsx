import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../shared/utils/hooks/user/useUpdateUser";

import Button from "../../shared/ui/Button";
import InputForm from "../../shared/ui/InputForm";
import styles from "./ProfileUserPassword.module.scss";

function ProfileUserPassword() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function handleUpdate({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }
  return (
    <>
      <h2>Изменить пароль</h2>
      <div className={styles.infoRow}>
        <label>Новый пароль</label>
        <InputForm
          id="password"
          type="password"
          autoComplete="false"
          placeholder="Новый пароль"
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
        <label>Повторите пароль</label>
        <InputForm
          id="passwordConfirm"
          type="password"
          autoComplete="false"
          placeholder="Повторите пароль"
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
          Обновить пароль
        </Button>
      </div>
    </>
  );
}

export default ProfileUserPassword;
