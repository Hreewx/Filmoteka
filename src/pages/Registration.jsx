import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../shared/utils/hooks/authentication/useSignup";

import ButtonForm from "../shared/ui/ButtonForm";
import styles from "./Registration.module.scss";
import InputForm from "../shared/ui/InputForm";

function Registration() {
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;

  function onSubmit({ email, password, login }) {
    signup(
      { email, password, login },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <section className={styles.container}>
      <h2>Создайте аккаунт</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <InputForm
            type="text"
            id="login"
            autoComplete="off"
            placeholder="Логин"
            disabled={isPending}
            register={{
              ...register("login", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Login must be at least 2 characters",
                },
              }),
            }}
            errorMessage={errors.login?.message}
          />
        </div>

        <div className={styles.inputWrapper}>
          <InputForm
            type="text"
            id="email"
            autoComplete="off"
            placeholder="Email"
            disabled={isPending}
            register={{
              ...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please provide a valid email address",
                },
              }),
            }}
            errorMessage={errors.email?.message}
          />
        </div>

        <div className={styles.inputWrapper}>
          <InputForm
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Пароль"
            disabled={isPending}
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

        <div className={styles.inputWrapper}>
          <InputForm
            type="password"
            id="passwordConfirm"
            autoComplete="off"
            placeholder="Повторите пароль"
            disabled={isPending}
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

        <ButtonForm disabled={isPending}>Зарегистрироваться</ButtonForm>

        <div className={styles.bottomContainer}>
          <p>Уже есть аккаунт? </p>
          <NavLink to="/login" className={styles.link}>
            Войти!
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Registration;
