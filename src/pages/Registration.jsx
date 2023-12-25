import { NavLink } from "react-router-dom";
import ButtonForm from "../shared/ui/ButtonForm";
import styles from "./Registration.module.scss";
import { useForm } from "react-hook-form";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          type="password"
          autoComplete="off"
          placeholder="Password"
          {...register("password", {
            required: true,
            maxLength: 8,
          })}
        />

        <input
          type="password"
          autoComplete="off"
          placeholder="Repeat password"
          {...register("passwordConfirm", {
            required: true,
            maxLength: 8,
          })}
        />

        <ButtonForm>Sign Up</ButtonForm>

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
