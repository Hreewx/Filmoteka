import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../shared/utils/hooks/authentication/useLogin";

import styles from "./Login.module.scss";
import ButtonForm from "../shared/ui/ButtonForm";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <section className={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
        </div>

        <ButtonForm disabled={isPending}>Sign In</ButtonForm>

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
