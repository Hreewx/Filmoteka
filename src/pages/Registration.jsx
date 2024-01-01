import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../shared/utils/hooks/useSignup";

import ButtonForm from "../shared/ui/ButtonForm";
import styles from "./Registration.module.scss";
import InputForm from "../shared/ui/InputForm";

function Registration() {
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;

  console.log(errors);

  function onSubmit({ email, password }) {
    signup(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <section className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="Password"
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
            placeholder="Repeat password"
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

        <ButtonForm disabled={isPending}>Sign Up</ButtonForm>

        <div className={styles.bottomContainer}>
          <p>Already have an account? </p>
          <NavLink to="/login" className={styles.link}>
            Sign In!
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Registration;
