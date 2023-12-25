// import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../shared/utils/hooks/useLogin";

import styles from "./Login.module.scss";
import ButtonForm from "../shared/ui/ButtonForm";

function Login() {
  const [email, setEmail] = useState("test@mail.ru");
  const [password, setPassword] = useState("12345678");
  const { login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login({ email, password });
  }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <section className={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          type="password"
          autoComplete="off"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // {...register("Password", {
          //   required: true,
          //   maxLength: 8,
          // })}
        />

        <ButtonForm>Sign In</ButtonForm>

        <div className={styles.bottomContainer}>
          <p>Dont have an account? </p>
          <NavLink to="/registration" className={styles.link}>
            Sign Up!
          </NavLink>
        </div>
      </form>
    </section>
  );
}

export default Login;
